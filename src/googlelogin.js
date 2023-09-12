import {auth} from "./firebase";
import { signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
const provider = new GoogleAuthProvider();

const saveuserData = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
}




export const signOutUser = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        localStorage.clear();
        window.location.href="/"
        
        console.log("Sign-out successful");
    }).catch((error) => {
        // An error happened.
        console.log("sign out failed");
    });
}




export const  GoogleLogin = () => {

  signInWithPopup(auth, provider)
      .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          saveuserData(user);
          // The signed-in user info.
          //REDIRECT USER TO DASHBOARD
          window.location.href="/dashboard"
          
          // ...
      }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorMessage);
          // ...
      });
}
