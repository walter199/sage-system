import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Team } from '../shared/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamsRef!: AngularFireList<any>
  teamRef!: AngularFireObject<any>

  constructor(private db: AngularFireDatabase) { }

  //Create Team Member
  AddTeam(team: Team) {
    this.teamsRef.push({
      id: team.id,
      name: team.name,
      jobTitle: team.jobTitle,
      email: team.email,
      phone: team.phone,
      image: team.image,
    })
  }

  //Fetch Single Team Member Object
  GetTeam(id: string) {
    this.teamRef = this.db.object('team-members/' + id)
    return this.teamRef
  }

  //Fetch Team Members List
  GetTeamList() {
    this.teamsRef = this.db.list('/team-members')
    return this.teamsRef
  }

  //Update Team Member object
  UpdateTeam(team: Team) {
    this.teamRef.update({
      id: team.id,
      name: team.name,
      jobTitle: team.jobTitle,
      email: team.email,
      phone: team.phone,
      image: team.image,
    })
  }

  // Delete Team Member Object
  DeleteTeam(id: string) {
    this.teamRef = this.db.object('team-members/' + id)
    this.teamRef.remove()
  }

}
