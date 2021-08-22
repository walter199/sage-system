import { AddTaskComponent } from './add-task/add-task.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  dialogRef!: MatDialogRef <any> 

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddTaskComponent, {
        height: '500px',
        width: '1000px'
    });
    
  }
  
}
