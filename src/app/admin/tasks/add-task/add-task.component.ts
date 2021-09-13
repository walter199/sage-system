import { TaskService } from './../../../services/task.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  public taskForm!: FormGroup

  constructor(public taskService: TaskService, public fb: FormBuilder, public router: Router) { }


  ngOnInit(): void {
    this.taskService.GetTasksList()
    this.tasForm()
  }

  tasForm(){
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      deadline: ['', [Validators.required, Validators.minLength(2)]],
      project: ['', [Validators.required, Validators.minLength(2)]],
      teamMember: ['', [Validators.required, Validators.minLength(2)]],
      status: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  get title() {
    return this.taskForm.get('title')
  }

  get description() {
    return this.taskForm.get('description')
  }

  get deadline() {
    return this.taskForm.get('deadline')
  }

  get project() {
    return this.taskForm.get('project')
  }

  get teamMember() {
    return this.taskForm.get('teamMember')
  }

  get status() {
    return this.taskForm.get('status')
  }

  ResetForm() {
    this.taskForm.reset()
  }

  submitTaskData() {
    this.taskService.AddTask(this.taskForm.value)
    this.ResetForm()
    this.router.navigate(['/tasks'])
  }
}
