import { Resource } from './../../shared/resource';
import { ResourceService } from './../../services/resource.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddResourceComponent } from './add-resource/add-resource.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  dialogRef!: MatDialogRef <any> 
  p: number = 1
  Resource!: Resource[];

  constructor(
    public dialog: MatDialog,
    public resourceService: ResourceService
  ) { }

  ngOnInit(): void {
    this.dataState()
  }

  dataState() {
    this.resourceService.GetResourcesList().valueChanges().subscribe(data => {
      this.Resource = data
    })
  }

  deleteResource(resource: { $key: string; }) {
    if(window.confirm('Are you sure you want to delete this task ?')) {
      this.resourceService.DeleteResource(resource.$key)
    }
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddResourceComponent, {
        height: '500px',
        width: '1000px'
    });
    
  }
}
