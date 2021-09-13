import { TeamService } from './../../../services/team.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
  public teamForm!: FormGroup

  constructor(public teamService: TeamService, public fb: FormBuilder) { }

  ngOnInit() {
    this.teamService.GetTeamList()
    this.teaForm()
  }

  teaForm() {
    this.teamForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(1)]],
      name: ['', [Validators.required, Validators.minLength(1)]],
      jobTitle: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      image: ['', Validators.required]
    })
  }

  get id(){
    return this.teamForm.get('id')
  }

  get name(){
    return this.teamForm.get('name')
  }

  get jobTitle(){
    return this.teamForm.get('jobTitle')
  }

  get email(){
    return this.teamForm.get('email')
  }

  get phone(){
    return this.teamForm.get('phone')
  }

  get image(){
    return this.teamForm.get('image')
  }

  ResetForm() {
    this.teamForm.reset()
  }

  submitTeamData() {
    this.teamService.AddTeam(this.teamForm.value)
    this.ResetForm()
  }

}
