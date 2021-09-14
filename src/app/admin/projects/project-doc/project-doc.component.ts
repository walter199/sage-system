import { UploadFormComponent } from './upload-form/upload-form.component';
import { FileUpload } from './../../../models/file-upload';
import { FileUploadService } from './../../../services/file-upload.service';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-doc',
  templateUrl: './project-doc.component.html',
  styleUrls: ['./project-doc.component.scss']
})
export class ProjectDocComponent implements OnInit {
  dialogRef!: MatDialogRef <any> 
  fileUploads?: any[];

  constructor(
    private uploadService: FileUploadService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.uploadService.getFiles(6).snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

  openDialog() {
    this.dialogRef = this.dialog.open(UploadFormComponent, {
        height: '500px',
        width: '1000px'
    });
    
  }
}
