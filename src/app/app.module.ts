import { FirebaseAuthService } from './services/firebase-auth.service';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//import firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavComponent } from './admin/layout/side-nav/side-nav.component';
import { TopNavComponent } from './admin/layout/top-nav/top-nav.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { EventsComponent } from './admin/events/events.component';
import { TeamMembersComponent } from './admin/team-members/team-members.component';
import { TasksComponent } from './admin/tasks/tasks.component';
import { FinanceComponent } from './admin/finance/finance.component';
import { TimelineComponent } from './admin/timeline/timeline.component';
import { ClientsComponent } from './admin/clients/clients.component';
import { MessagesComponent } from './admin/messages/messages.component';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AddProjectComponent } from './admin/projects/add-project/add-project.component';
import { ProfileComponent } from './admin/user/profile/profile.component';
import { SettingsComponent } from './admin/user/settings/settings.component';
import { InvoiceComponent } from './admin/finance/invoice/invoice.component';
import { ExpensesComponent } from './admin/finance/expenses/expenses.component';
import { ProjectDocComponent } from './admin/projects/project-doc/project-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TopNavComponent,
    DashboardComponent,
    ProjectsComponent,
    EventsComponent,
    TeamMembersComponent,
    TasksComponent,
    FinanceComponent,
    TimelineComponent,
    ClientsComponent,
    MessagesComponent,
    LogInComponent,
    RegisterComponent,
    AddProjectComponent,
    ProfileComponent,
    SettingsComponent,
    InvoiceComponent,
    ExpensesComponent,
    ProjectDocComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [FirebaseAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
