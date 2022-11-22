#!/usr/bin/env bash

log () {
  case $1 in
    info)
      echo -e "\n\e[92m[info]: $2"
      ;;

    warn)
      echo -e "\n\e[93m[warn]: $2"
      ;;

    error)
      echo -e "\n\e[91m[error]: $2"
      ;;

    *)
      echo -e "\n\e[92m[$1]: $2"
  esac
}


#################################################
#  Confirm selected Doppler Project and Config  #
#################################################

if ! doppler secrets > /dev/null 2>&1; then
  log error "Doppler Project and Config not set. Expose a service token using the \$DOPPLER_TOKEN environment variable or run 'doppler setup' prior to executing this script.\n"
  exit 1
fi

DOPPLER_PROJECT=$(doppler secrets get DOPPLER_PROJECT --plain)
DOPPLER_CONFIG=$(doppler secrets get DOPPLER_CONFIG --plain)


################################
#  Required Cloudflare config  #
################################

if [ -z "$CLOUDFLARE_ACCOUNT_ID" ]; then
    echo -en '\nCLOUDFLARE_ACCOUNT_ID: ' && read -rs CLOUDFLARE_ACCOUNT_ID
fi

if [ -z "$CLOUDFLARE_EMAIL" ]; then
    echo -en '\nCLOUDFLARE_EMAIL: ' && read -rs CLOUDFLARE_EMAIL
fi

if [ -z "$CLOUDFLARE_GLOBAL_API_KEY" ]; then
    echo -en '\nCLOUDFLARE_GLOBAL_API_KEY: ' && read -rs CLOUDFLARE_GLOBAL_API_KEY
fi

if [ -z "$CLOUDFLARE_PAGES_NAME" ]; then
    echo -en '\nCLOUDFLARE_PAGES_NAME: ' && read -r CLOUDFLARE_PAGES_NAME
fi

if [ -z "$CLOUDFLARE_PAGES_ENVIRONMENT" ]; then
    echo -en '\nCLOUDFLARE_PAGES_ENVIRONMENT (preview|production): ' && read -r CLOUDFLARE_PAGES_ENVIRONMENT
fi

if [[ $CLOUDFLARE_PAGES_ENVIRONMENT != "production" ]] && [[ $CLOUDFLARE_PAGES_ENVIRONMENT != "preview" ]]
then
    log error 'The CLOUDFLARE_PAGES_ENVIRONMENT must be either "production" or "preview"\n'
    exit 1
fi

# Verify supplied credentials
if ! curl --silent --fail --tlsv1.2 --proto "=https" -X GET "https://api.cloudflare.com/client/v4/user" \
  -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
  -H "X-Auth-Key: $CLOUDFLARE_GLOBAL_API_KEY" \
  -H "Content-Type: application/json" > /dev/null; then
  log error "Sorry, the supplied Cloudflare credentials appear to be invalid\n"
  exit 1
fi


#########################
#  Cloudflare functions #
#########################

CLOUDFLARE_PAGE_URL="https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/$CLOUDFLARE_PAGES_NAME"

cloudflare_deploy () {
  curl --fail --silent --tlsv1.2 --proto "=https" -X "$1" "$CLOUDFLARE_PAGE_URL/deployments" \
  -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
  -H "X-Auth-Key: $CLOUDFLARE_GLOBAL_API_KEY" \
  -H "Content-Type: application/json"
}

cloudflare_env_vars () {
  if [[ -n "$2" ]]; then
    curl --fail --silent -X "$1" "$CLOUDFLARE_PAGE_URL" \
      -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
      -H "X-Auth-Key: $CLOUDFLARE_GLOBAL_API_KEY" \
      -H "Content-Type: application/json" \
      --data "$2";
  else
    curl --fail --silent -X "$1" "$CLOUDFLARE_PAGE_URL" \
      -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
      -H "X-Auth-Key: $CLOUDFLARE_GLOBAL_API_KEY" \
      -H "Content-Type: application/json";
  fi
}

env_vars_payload () {
  echo "{\"deployment_configs\":{\"$1\":{\"env_vars\":$2}}}"
}


####################################
#  Verify Cloudflare Pages config  #
####################################

if ! cloudflare_env_vars GET > /dev/null; then
  log error "Sorry, a Pages app '$CLOUDFLARE_PAGES_NAME' belonging to Account Id '$CLOUDFLARE_ACCOUNT_ID' could not be found.\n"
  exit 1
fi

if [[ -n "$IMPORT_CLOUDFLARE" ]]; then
  log info "\$IMPORT_CLOUDFLARE set: Importing secrets from $CLOUDFLARE_PAGES_NAME $CLOUDFLARE_PAGES_ENVIRONMENT to Doppler"
  doppler secrets upload <(jq -cr '.result.deployment_configs.production.env_vars | with_entries(.value |= .value)' <(cloudflare_env_vars GET))
fi

if [[ -n "$CLEAN_SYNC" ]]; then
  log info "\$CLEAN_SYNC set: Deleting all $CLOUDFLARE_PAGES_NAME $CLOUDFLARE_PAGES_ENVIRONMENT envirionment variables"
  NULL_ENV_VARS=$(jq -cr '.result | select(.deployment_configs == "production") | .env_vars | with_entries(.value |= null)' <(cloudflare_env_vars GET))
  cloudflare_env_vars PATCH "$(env_vars_payload production "$NULL_ENV_VARS")" > /dev/null
fi


##################
#  Sync Secrets  #
##################

log info "Syncing secrets from Doppler ($DOPPLER_PROJECT > $DOPPLER_CONFIG) to Cloudflare Pages ($CLOUDFLARE_PAGES_NAME > $CLOUDFLARE_PAGES_ENVIRONMENT)"
DOPPLER_SECRETS=$(jq -cr '. | with_entries(.value = { "value": (.value)})' <(doppler secrets download --no-file --format json))
cloudflare_env_vars PATCH "$(env_vars_payload "$CLOUDFLARE_PAGES_ENVIRONMENT" "$DOPPLER_SECRETS")" > /dev/null
log info 'Done!'

# Optional production deployment trigger to apply secret updates
if [[ -n "$AUTO_DEPLOY" ]]; then
  log info "\$AUTO_DEPLOY set: Triggering deploy so environment variable updates are applied"  
  if ! cloudflare_deploy POST > /dev/null; then
    log error "Deployment failed. Please check your Cloudflare Pages deployment logs\n"    
  else
    log info "Deployment triggered successfully\n"
  fi
fi