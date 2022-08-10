import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");
import { getPerformance } from "firebase/performance";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId:process.env.FIREBASE_MEASUREMENTID
  };

export const app = initializeApp(firebaseConfig);
export const perf = getPerformance(app);
// TODO: make sure this analytics is working...
export const analytics = getAnalytics(app);
export const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(process.env.RECAPTCHA_V3_SITEKEY),
    isTokenAutoRefreshEnabled: true
});

// This is the messaging service for the app.
const messaging = getMessaging();
getToken(messaging, { vapidKey: process.env.FIREBASE_CLOUDMESSAGINGVAPIDKEY }).then((currentToken) => {
  if (currentToken) {
    console.log('Cloud Messaging working!');
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
