import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

 
  constructor() { }

  //user logins
  SignIn(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }).then((result)=>{
      console.log("user is logged in")
    });
  }
  //user regisetering
  SignUp(email, password){
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error)  => {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
}).then((results)=>{
  console.log("user is registered")
});
  }

  resetPassword(email){
    console.log(email)

    firebase.auth().sendPasswordResetEmail(email).then(() => {
      // Sign-out successful.
      console.log("password send")
    }).catch((error) => {
      // An error happened.
      console.log("try again...")
    });
  }

  logout(){
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log("logged out")
    }).catch((error) => {
      // An error happened.
      console.log("try again...")
    });

  }


}
