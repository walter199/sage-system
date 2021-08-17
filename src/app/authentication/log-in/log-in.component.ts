import { FirebaseAuthService } from './../../services/firebase-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup

  isSignedIn = false

  constructor(private fb: FormBuilder,private firebaseService: FirebaseAuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

    if(localStorage.getItem('user')!== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async onSignin(email: string, password: string){
    await this.firebaseService.signin(email, password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    
  }
  
  
}
