import * as firebase from "firebase/app";
import "firebase/messaging";


var firebaseConfig = {
    apiKey: "AIzaSyCUzr5lzJpvWz9BwtlAJVS_Y2f3csMutsY",
    authDomain: "ghn-2020.firebaseapp.com",
    databaseURL: "https://ghn-2020.firebaseio.com",
    projectId: "ghn-2020",
    storageBucket: "ghn-2020.appspot.com",
    messagingSenderId: "981734276351",
    appId: "1:981734276351:web:bb113e56603629b47c20ca"
};


// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const mess = firebase.messaging();


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
mess.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
});
// [END background_handler]

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.setBackgroundMessageHandler` handler.
mess.onMessage((payload) => {
    console.log('Message received. ', payload);
});