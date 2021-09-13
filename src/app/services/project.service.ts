import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Project } from '../shared/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectsRef!: AngularFireList<any>
  projectRef!: AngularFireObject<any>

  constructor(private db: AngularFireDatabase) { }

  //Create Project
  AddProject(project: Project) {
    this.projectsRef.push({
      id: project.id,
      name: project.name,
      description: project.description,
      status: project.status,
      clientName: project.clientName,
      projectLeader: project.projectLeader,
      estimatedBudget: project.estimatedBudget,
      amountSpent: project.amountSpent,
      estimatedDuration: project.estimatedDuration
    })
  }

  //Fetch Single Project Object
  GetProject(id: string) {
    this.projectRef = this.db.object('projects/' + id)
    return this.projectRef
  }

  //Fetch Projects List
  GetProjectsList() {
    this.projectsRef = this.db.list('/projects')
    return this.projectsRef
  }

  //Update Project Object
  UpdateProject(project: Project) {
    this.projectRef.update({
      id: project.id,
      name: project.name,
      description: project.description,
      status: project.status,
      clientName: project.clientName,
      projectLeader: project.projectLeader,
      estimatedBudget: project.estimatedBudget,
      amountSpent: project.amountSpent,
      estimatedDuration: project.estimatedDuration
    })
  }

  //Delete Project Object
  DeleteProject(id: string) {
    this.projectRef = this.db.object('projects/' + id)
    this.projectRef.remove()
  }
}
