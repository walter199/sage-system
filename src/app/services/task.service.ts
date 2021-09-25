import { Injectable } from '@angular/core';
import { Task } from '../shared/task';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksRef!: AngularFireList<any>
  taskRef!: AngularFireObject<any>

  constructor(private db: AngularFireDatabase) { }

  //Create Task
  AddTask(task: Task){
    this.tasksRef.push({
      id: task.id,
      title: task.title,
      description: task.description,
      deadline: task.deadline,
      project: task.project,
      teamMember: task.teamMember,
      status: task.status
    })
  }

  // Fetch Single Task Object
  GetTask(id: string) {
    this.taskRef = this.db.object('tasks/' + id)
    return this.taskRef
  }

  // Fetch Tasks List
  GetTasksList() {
    this.tasksRef = this.db.list('/tasks')
    return this.tasksRef
  }

  // Update Task Object
  UpdateTask(task: Task) {
    this.taskRef.update({
      id: task.id,
      title: task.title,
      description: task.description,
      deadline: task.deadline,
      project: task.project,
      teamMember: task.teamMember,
      status: task.status
    })
  }

  // Delete Task Object
  DeleteTask(id: string) {
    this.taskRef = this.db.object('tasks/' + id)
    this.taskRef.remove()
  }

}
