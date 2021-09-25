import { ClientService } from './../../services/client.service';
import { PaymentService } from './../../services/payment.service';
import { ProjectService } from './../../services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  task$
  project$
  payment$
  client$

  constructor(
    public taskService: TaskService,
    public projectService: ProjectService,
    public paymentService: PaymentService,
    public clientService: ClientService
  ) { 
    this.task$ = taskService.GetTasksList()
    this.project$ = projectService.GetProjectsList()
    this.payment$ = paymentService.GetPaymentsList()
    this.client$ = clientService.GetClientsList()
  }

}
