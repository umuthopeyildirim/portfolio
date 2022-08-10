importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBu7_TSYbQmnO8E6Sl70n3Cyc7-ZzqlMiM",
    authDomain: "portfolio-umut-yildirim.firebaseapp.com",
    projectId: "portfolio-umut-yildirim",
    storageBucket: "portfolio-umut-yildirim.appspot.com",
    messagingSenderId: "86478206826",
    appId: "1:86478206826:web:27dea59a11221f7974d713",
    measurementId: "G-RTD554CXLK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
console.log('[firebase-messaging-sw.js] Received background message ', payload);
const notificationTitle = payload.notification.title;
const notificationOptions = {
body: payload.notification.body,
};
return self.registration.showNotification(notificationTitle,
notificationOptions);
});
self.addEventListener('notificationclick', event => {
   console.log(event)
});