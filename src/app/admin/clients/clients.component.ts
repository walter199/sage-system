import { ClientService } from './../../services/client.service';
import { AddClientComponent } from './add-client/add-client.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/shared/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  dialogRef!: MatDialogRef <any>
  p: number = 1
  Client!: Client[]

  constructor(public dialog: MatDialog, public clientService: ClientService) { }

  ngOnInit() {
    this.dataState()
  }

  dataState() {
    this.clientService.GetClientsList().valueChanges().subscribe(data => {
      this.Client = data
    })
  }

  deleteClient(client: { $key: string; }) {
    if(window.confirm('Are you sure you want to delete this task ?')) {
      this.clientService.DeleteClient(client.$key)
    }
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddClientComponent, {
        height: '500px',
        width: '1000px'
    });
    
  }
}
