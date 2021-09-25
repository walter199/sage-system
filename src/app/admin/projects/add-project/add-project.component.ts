import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProjectService } from './../../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  public projectForm!: FormGroup

  constructor(
    public projectService: ProjectService, // importing Project Service
    public fb: FormBuilder, // declaring FormBuilder for use
    private router: Router // for routing
  ) { }


  ngOnInit() {
    this.projectService.GetProjectsList()
    this.projecForm()
  }

  projecForm() { // for project validations
    this.projectForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(2)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      status: ['', [Validators.required, Validators.minLength(2)]],
      clientName: ['', [Validators.required, Validators.minLength(2)]],
      projectLeader: ['', [Validators.required, Validators.minLength(2)]],
      estimatedBudget: ['', [Validators.required, Validators.minLength(2)]],
      amountSpent: ['', [Validators.required, Validators.minLength(2)]],
      estimatedDuration: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  get id() {
    return this.projectForm.get('id')
  }

  get name() {
    return this.projectForm.get('name')
  }

  get description() {
    return this.projectForm.get('description')
  }

  get status() {
    return this.projectForm.get('status')
  }

  get clientName() {
    return this.projectForm.get('clientName')
  }
  
  get projectLeader() {
    return this.projectForm.get('projectLeader')
  }

  get estimatedBudget() {
    return this.projectForm.get('estimatedBudget')
  }
  
  get amountSpent() {
    return this.projectForm.get('amountSpent')
  }

  get estimatedDuration() {
    return this.projectForm.get('estimatedDuration')
  }

  ResetForm() {
    this.projectForm.reset()
  }

  submitProjectData() {
    this.projectService.AddProject(this.projectForm.value)
    this.ResetForm()
    this.router.navigate(['/projects'])
  }

}
