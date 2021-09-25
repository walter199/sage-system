import { FirebaseAuthService } from './../../services/firebase-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup
  dialogRef!: MatDialogRef <any> 

  isSignedIn = false

  constructor(
    public fb: FormBuilder,
    public firebaseService: FirebaseAuthService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
    })

    if(localStorage.getItem('user')!== null){
      this.isSignedIn = true
    }
    else{
      this.isSignedIn = false
    }
    
  }

  async onSignin(email: string, password: string){
    await this.firebaseService.signin(email, password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    
  }
  
  openDialog() {
    this.dialogRef = this.dialog.open(ForgotPasswordComponent, {
        height: '500px',
        width: '1000px'
    });
    
  }
}
