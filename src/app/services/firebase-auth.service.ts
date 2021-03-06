import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../shared/user';
import { Observable, of } from 'rxjs';
import { switchMap, first, map } from 'rxjs/operators';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  userData: any; // Save logged in user data

  isLoggedIn = false
  user$: any;
 

  constructor(
    public firebaseAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public afs: AngularFirestore,   // Inject Firestore service
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) { 
    this.user$ = this.firebaseAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  // Sign In
  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res =>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
      this.ngZone.run(() => {
        this.router.navigate(['/dashboard'])
      })   
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  // Sign up Register
  async signup(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res =>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  // Reset Forgot password
  ForgotPassword(passwordResetEmail: string) {
    return this.firebaseAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  getUser() {
    return this.user$.pipe(first()).toPromise();
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.GoogleAuthProvider) {
    return this.firebaseAuth.signInWithPopup(provider)
    .then((res) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
      
    }).catch((error) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: { uid: any, email: any, displayName: any, photoURL: any, emailVerified: any }) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  //Log Out
  logout(){
    return this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user')
    })
    
  }
}
