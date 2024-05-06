import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBqPIJHeJ6GlvYdb51w-kswUFQyvBsuMxE",
  authDomain: "gym-app-notifications.firebaseapp.com",
  projectId: "gym-app-notifications",
  storageBucket: "gym-app-notifications.appspot.com",
  messagingSenderId: "533400110894",
  appId: "1:533400110894:web:a54d91c71b99c43d745cbf"
}
firebase.initializeApp(config)

export default firebase