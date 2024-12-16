import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdZHWXDpzzjUymPNwGImSfp1Gt-9pVu5c",

  authDomain: "crwn-clothing-db-131c0.firebaseapp.com",

  projectId: "crwn-clothing-db-131c0",

  storageBucket: "crwn-clothing-db-131c0.firebasestorage.app",

  messagingSenderId: "296767595953",

  appId: "1:296767595953:web:2d7f8066c18b3689f7c990",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>signInWithRedirect(auth,provider);

export const db = getFirestore();

export const createUserDocumentationFromAuth = async (userAuth) =>{
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    
    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt= new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
        }catch(error){
            console.log("error creating user" ,error.message);
        }
    }
    return userDocRef;
}