import { ProjectService } from './../../../services/project.service';
import { TeamService } from './../../../services/team.service';
import { Router } from '@angular/router';
import { ResourceService } from './../../../services/resource.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent implements OnInit {
  public resourceForm!: FormGroup
  teams$: any
  projects$: any

  constructor(
    public projectService: ProjectService,
    public resourceService: ResourceService,
    public teamService: TeamService,
    public fb: FormBuilder,
    public router: Router
  ) { 
    this.teams$ = teamService.GetTeamList()
    this.projects$ = projectService.GetProjectsList()
  }

  ngOnInit(): void {
    this.resourceService.GetResourcesList()
    this.resForm()
  }

  resForm(){
    this.resourceForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(1)]],
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      deadline: ['', [Validators.required, Validators.minLength(2)]],
      project: ['', [Validators.required, Validators.minLength(2)]],
      teamMember: ['', [Validators.required, Validators.minLength(2)]],
      status: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  get id() {
    return this.resourceForm.get('id')
  }

  get names() {
    return this.resourceForm.get('names')
  }

  get description() {
    return this.resourceForm.get('description')
  }

  get project() {
    return this.resourceForm.get('project')
  }

  get teamMember() {
    return this.resourceForm.get('teamMember')
  }

  get status() {
    return this.resourceForm.get('status')
  }

  ResetForm() {
    this.resourceForm.reset()
  }

  submitResourceData() {
    this.resourceService.AddResource(this.resourceForm.value)
    this.ResetForm()
    this.router.navigate(['/resources'])
  }
}
