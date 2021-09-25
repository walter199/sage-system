import { Task } from './../../shared/task';
import { AddTaskComponent } from './add-task/add-task.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  dialogRef!: MatDialogRef <any> 
  p: number = 1
  Task!: Task[];
  hideWhenNoTask: boolean = false
  noData: boolean = false
  preLoader: boolean = true


  constructor(public dialog: MatDialog, public taskService: TaskService) { }

  ngOnInit() {
    this.dataState()
    
  }

  dataState() {
    this.taskService.GetTasksList().valueChanges().subscribe(data => {
      this.Task = data
    })
  }

  deleteTask(task: { title: string; }) {
    if(window.confirm('Are you sure you want to delete this task ?')) {
      this.taskService.DeleteTask(task.title)
    }
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddTaskComponent, {
        height: '500px',
        width: '1000px'
    });
    
  }
  
}
