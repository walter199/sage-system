import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FirebaseAuthService } from './services/firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sage-system';

  flag:boolean = true

  isSignedIn = false

  constructor(public firebaseService: FirebaseAuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  apply(value:string){
    this.flag = value == "login"?true : false;
  }
  
  handleLogout(){
    this.isSignedIn = false
  }
}
