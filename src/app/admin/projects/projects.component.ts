import { AddProjectComponent } from './add-project/add-project.component';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddProjectComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: $(result)')
    })
  }

  

}
