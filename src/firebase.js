import firebase from 'firebase/app'
import "firebase/database";

const config = {
  apiKey: 'AIzaSyAlOmlhjOCg8CnaujQdmsdvs9GaQNh0Q5A',
  authDomain: "react-firebase-blog-55a8f.firebaseapp.com",
  databaseURL: "https://react-firebase-blog-55a8f.firebaseio.com",
  projectId: "react-firebase-blog-55a8f",
  storageBucket: "react-firebase-blog-55a8f.appspot.com",
  messagingSenderId: "1038489350270",
  appId: "1:1038489350270:web:a0f4c3ce1a360b2199e82f",
}

let firebaseCache

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}