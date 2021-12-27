import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDWtv2TgHKv1JKSnEClhKzTLfud-rupsfE",
    authDomain: "chatpedia-36738.firebaseapp.com",
    projectId: "chatpedia-36738",
    storageBucket: "chatpedia-36738.appspot.com",
    messagingSenderId: "352308318985",
    appId: "1:352308318985:web:5a9790b184eafd71c4f9d8"
  }).auth()