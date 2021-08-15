import { FirebaseAuthService } from './../../../services/firebase-auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()

  constructor(private firebaseService: FirebaseAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate(['/login'])
  }

}
