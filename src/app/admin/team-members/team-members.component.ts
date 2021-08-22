import { AddMemberComponent } from './add-member/add-member.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {
  dialogRef!: MatDialogRef <any> 

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddMemberComponent, {
        height: '500px',
        width: '1000px'
    });
    
  }
}
