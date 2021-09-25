import { ProjectService } from './../../../services/project.service';
import { ClientService } from './../../../services/client.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  public clientForm!: FormGroup
  projects$: any

  constructor(
    public projectService: ProjectService,
    public clientService: ClientService,
    public fb: FormBuilder
  ) { 
    this.projects$ = projectService.GetProjectsList()
  }

  ngOnInit() {
    this.clientService.GetClientsList()
    this.clienForm()
  }

  clienForm() {
    this.clientForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(1)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      primaryContact: ['', [Validators.required, Validators.minLength(2)]],
      projectName: ['', [Validators.required, Validators.minLength(2)]],
      projectNumber: ['', [Validators.required, Validators.minLength(1)]]
    })
  }

  get id() {
    return this.clientForm.get('id')
  }

  get name() {
    return this.clientForm.get('name')
  }

  get primaryContact() {
    return this.clientForm.get('primaryContact')
  }

  get projectName() {
    return this.clientForm.get('projectName')
  }

  get projectNumber() {
    return this.clientForm.get('projectNumber')
  }

  ResetForm() {
    this.clientForm.reset()
  }

  submitClientData() {
    this.clientService.AddClient(this.clientForm.value)
    this.ResetForm()
    
  }

}
