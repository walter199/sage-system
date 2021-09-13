import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Client } from '../shared/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientsRef!: AngularFireList<any>
  clientRef!: AngularFireObject<any>

  constructor(private db: AngularFireDatabase) { }

  //Create Client
  AddClient(client: Client) {
    this.clientsRef.push({
      id: client.id,
      name: client.name,
      primaryContact: client.primaryContact,
      projectName: client.projectName,
      projectNumber: client.projectNumber
    })
  }

  //Fetch Single Client Object
  GetClient(id: string) {
    this.clientRef = this.db.object('clients/' + id)
    return this.clientRef
  }

  //Fetch Clients List
  GetClientsList() {
    this.clientsRef = this.db.list('/clients')
    return this.clientsRef
  }

  //Update Client Object
  UpdateClient(client: Client) {
    this.clientRef.update({
      id: client.id,
      name: client.name,
      primaryContact: client.primaryContact,
      projectName: client.projectName,
      projectNumber: client.projectNumber
    })
  }

  //Delete Client Object
  DeleteClient(id: string) {
    this.clientRef = this.db.object('clients/' + id)
    this.clientRef.remove()
  }

}
