import { Project } from './../../shared/project';
import { ProjectService } from './../../services/project.service';
import { AddProjectComponent } from './add-project/add-project.component';

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  dialogRef!: MatDialogRef <any> 
  p: number = 1
  Project!: Project[]

  constructor(public dialog: MatDialog, public projectService: ProjectService) { }

  ngOnInit() {
    this.dataState()
  }

  dataState() {
    this.projectService.GetProjectsList().valueChanges().subscribe(data => {
      this.Project = data
    })
  }

  deleteProject(project: { $key: string; }) {
    if(window.confirm('Are you sure you want to delete this task ?')) {
      this.projectService.DeleteProject(project.$key)
    }
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddProjectComponent, {
        height: '500px',
        width: '1000px'
    });
    
  }
  

}
