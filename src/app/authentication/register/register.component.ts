import { FirebaseAuthService } from './../../services/firebase-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm!: FormGroup

  isSignedIn = false

  constructor(private fb: FormBuilder,private firebaseService: FirebaseAuthService, private router: Router) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      companyName: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]],
      cpassword: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
    })

    if(localStorage.getItem('user')!== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async onSignup(email: string, password: string){
    await this.firebaseService.signup(email, password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = false
    this.router.navigate(['/dashboard'])
  }

}
