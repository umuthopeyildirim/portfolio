import posthog from 'posthog-js';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  posthog.init('phc_kj7SlNVSRxYPv0W8mvZtBGpANBWtWBT2HnWThsvCmhU', {
    api_host: 'https://app.posthog.com',
  });
  posthog.capture('my event', {property: 'value'});
}
