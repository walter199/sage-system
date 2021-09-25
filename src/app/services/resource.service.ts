import { Resource } from './../shared/resource';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  resourcesRef!: AngularFireList<any>
  resourceRef!: AngularFireObject<any>

  constructor(private db: AngularFireDatabase) { }

  //Create Resource
  AddResource(resource: Resource){
    this.resourcesRef.push({
      id: resource.id,
      names: resource.names,
      description: resource.description,
      project: resource.project,
      teamMember: resource.teamMember,
      status: resource.status
    })
  }

  // Fetch Single Resource Object
  GetResource(id: string) {
    this.resourceRef = this.db.object('resources/' + id)
    return this.resourceRef
  }

  // Fetch Resources List
  GetResourcesList() {
    this.resourcesRef = this.db.list('/resources')
    return this.resourcesRef
  }

  // Update Resource Object
  UpdateResource(resource: Resource) {
    this.resourceRef.update({
      id: resource.id,
      names: resource.names,
      description: resource.description,
      project: resource.project,
      teamMember: resource.teamMember,
      status: resource.status
    })
  }

  // Delete Resource Object
  DeleteResource(id: string) {
    this.resourceRef = this.db.object('resources/' + id)
    this.resourceRef.remove()
  }
}
