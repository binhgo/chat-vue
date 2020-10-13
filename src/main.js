import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = true

import * as firebase from "firebase/app";
import "firebase/messaging";

import {ListViewPlugin} from '@syncfusion/ej2-vue-lists';

Vue.use(ListViewPlugin);

var firebaseConfig = {
    apiKey: "AIzaSyCUzr5lzJpvWz9BwtlAJVS_Y2f3csMutsY",
    authDomain: "ghn-2020.firebaseapp.com",
    databaseURL: "https://ghn-2020.firebaseio.com",
    projectId: "ghn-2020",
    storageBucket: "ghn-2020.appspot.com",
    messagingSenderId: "981734276351",
    appId: "1:981734276351:web:bb113e56603629b47c20ca"
};

new Vue({
    render: h => h(App)
}).$mount('#app')

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const mess = firebase.messaging();

// Add the public key generated from the console here.
mess.usePublicVapidKey("BCC7WapefcNTu1w4331xmXv3kFNFNm4dWRzK_rDcAiwYdo6Rz4brqCqskMf0tTKO3my45gtnSHA2OkkGl6s0XTo");

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
mess.getToken().then((currentToken) => {
    if (currentToken) {
        console.log(currentToken);
        sendTokenToServer(currentToken);
    } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
});

function sendTokenToServer(token) {

    let body = {
        userId: "10010",
        registrationId: token,
        deviceName: "android"
    };

    let axiosConfig = {
        headers: {
            "Authorization": 'Basic YmFja2VuZDpZUURQcFJGSHdjeDJhTjBaRVBUWUxQQkdOSGdyQzBLRQ=='
        }
    };

    axios.post("http://35.198.249.225:80/message/v1/firebase/device", body, axiosConfig)
        .then(response => {
            console.log(response);
        })
        .catch(e => {
            console.log(e)
        })
}

export {default as Chat} from './components/Chat.vue';