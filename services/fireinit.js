import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: "AIzaSyDTM13Ltaz43CZIjkcGPQCkziUbSZY8HkQ",
    authDomain: "chantal-masse.firebaseapp.com",
    databaseURL: "https://chantal-masse.firebaseio.com",
    projectId: "chantal-masse",
    storageBucket: "chantal-masse.appspot.com",
    messagingSenderId: "486658407752"
	})
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase
