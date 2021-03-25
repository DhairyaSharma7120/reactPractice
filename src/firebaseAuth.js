import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

var firebaseConfig = {
    apiKey: "AIzaSyAsyJ050R8VQeKUzmBFt5fybDpfQO3SAiI",
    authDomain: "authenticationprac-a17b6.firebaseapp.com",
    projectId: "authenticationprac-a17b6",
    storageBucket: "authenticationprac-a17b6.appspot.com",
    messagingSenderId: "328803158743",
    appId: "1:328803158743:web:91e6e4014d78a99740be92",
    measurementId: "G-C1HYYFH2QK"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    
    if(!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    console.log(snapShot);

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,

          ...additionalData
        })
        console.log("this is working")
      }catch(error){
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(firebaseConfig);
 

  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle =() => auth.signInWithPopup(provider);


  export default firebase;