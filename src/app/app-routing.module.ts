import { NotFoundComponent } from './admin/not-found/not-found.component';
import { ProjectDocComponent } from './admin/projects/project-doc/project-doc.component';
import { AddProjectComponent } from './admin/projects/add-project/add-project.component';
import { ExpensesComponent } from './admin/finance/expenses/expenses.component';
import { InvoiceComponent } from './admin/finance/invoice/invoice.component';
import { SettingsComponent } from './admin/user/settings/settings.component';
import { ProfileComponent } from './admin/user/profile/profile.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { MessagesComponent } from './admin/messages/messages.component';
import { ClientsComponent } from './admin/clients/clients.component';
import { TimelineComponent } from './admin/timeline/timeline.component';
import { TeamMembersComponent } from './admin/team-members/team-members.component';
import { TasksComponent } from './admin/tasks/tasks.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { FinanceComponent } from './admin/finance/finance.component';
import { EventsComponent } from './admin/events/events.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesComponent } from './admin/resources/resources.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'events', component: EventsComponent},
  {path: 'finance', component: FinanceComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'team-members', component: TeamMembersComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'messages', component: MessagesComponent},
  //{path: 'login', component: LogInComponent},
  //{path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'invoice', component: InvoiceComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'project-doc', component: ProjectDocComponent},
  {path: '404', component: NotFoundComponent},
  //{path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
