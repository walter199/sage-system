import { TeamService } from './../../services/team.service';
import { AddMemberComponent } from './add-member/add-member.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Team } from 'src/app/shared/team';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {
  dialogRef!: MatDialogRef <any> 
  p: number = 1
  Team! : Team[]

  constructor(public dialog: MatDialog, public teamService: TeamService) { }

  ngOnInit() {
    this.dataState()
  }

  dataState() {
    this.teamService.GetTeamList().valueChanges().subscribe(data => {
      this.Team = data
    })
  }

  deleteTask(team: { $key: string; }) {
    if(window.confirm('Are you sure you want to delete this task ?')) {
      this.teamService.DeleteTeam(team.$key)
    }
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddMemberComponent, {
        height: '500px',
        width: '1000px'
    });
    
  }
}
