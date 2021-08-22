import { AddProjectComponent } from './add-project/add-project.component';

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  dialogRef!: MatDialogRef <any> 

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddProjectComponent, {
        height: '500px',
        width: '1000px'
    });
    
  }
  

}
