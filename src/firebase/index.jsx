import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDETULoUy2pes7I4_Qq9_OPMreXJBjAZsc",
    authDomain: "prueba-ecommerce-6030e.firebaseapp.com",
    projectId: "prueba-ecommerce-6030e",
    storageBucket: "prueba-ecommerce-6030e.appspot.com",
    messagingSenderId: "612929983163",
    appId: "1:612929983163:web:99a5d79675dd2e139b0f9e"
})

export const getFireStore = () => {
    return firebase.firestore(app)
}
