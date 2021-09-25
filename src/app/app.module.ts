import { ResourceService } from './services/resource.service';
import { FileUploadService } from './services/file-upload.service';
import { ExpenseService } from './services/expense.service';
import { InvoiceService } from './services/invoice.service';
import { PaymentService } from './services/payment.service';
import { ClientService } from './services/client.service';
import { TaskService } from './services/task.service';
import { TeamService } from './services/team.service';
import { ProjectService } from './services/project.service';
import { FirebaseAuthService } from './services/firebase-auth.service';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { ResizableModule } from 'angular-resizable-element';

//import firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


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

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';

// Components imports
import { LogInComponent } from './authentication/log-in/log-in.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AddProjectComponent } from './admin/projects/add-project/add-project.component';
import { ProfileComponent } from './admin/user/profile/profile.component';
import { SettingsComponent } from './admin/user/settings/settings.component';
import { InvoiceComponent } from './admin/finance/invoice/invoice.component';
import { ExpensesComponent } from './admin/finance/expenses/expenses.component';
import { ProjectDocComponent } from './admin/projects/project-doc/project-doc.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AddClientComponent } from './admin/clients/add-client/add-client.component';
import { AddTaskComponent } from './admin/tasks/add-task/add-task.component';
import { AddMemberComponent } from './admin/team-members/add-member/add-member.component';
import { AddPaymentComponent } from './admin/finance/add-payment/add-payment.component';
import { AddExpenseComponent } from './admin/finance/expenses/add-expense/add-expense.component';
import { AddInvoiceComponent } from './admin/finance/invoice/add-invoice/add-invoice.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';
import { UploadFormComponent } from './admin/projects/project-doc/upload-form/upload-form.component';
import { UploadDetailsComponent } from './admin/projects/project-doc/upload-details/upload-details.component';
import { GanttComponent } from './admin/timeline/gantt/gantt.component';
import { ChartComponent } from './admin/timeline/chart/chart.component';
import { NotFoundComponent } from './admin/not-found/not-found.component';
import { ResourcesComponent } from './admin/resources/resources.component';
import { AddResourceComponent } from './admin/resources/add-resource/add-resource.component';

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
    ProjectDocComponent,
    AddClientComponent,
    AddTaskComponent,
    AddMemberComponent,
    AddPaymentComponent,
    AddExpenseComponent,
    AddInvoiceComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UploadFormComponent,
    UploadDetailsComponent,
    GanttComponent,
    ChartComponent,
    NotFoundComponent,
    ResourcesComponent,
    AddResourceComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    NgbModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule,
    MatToolbarModule,
    MatTreeModule,
    ResizableModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot()
  ],
  providers: [
    FirebaseAuthService,
    ProjectService,
    TeamService,
    TaskService,
    ClientService,
    PaymentService,
    InvoiceService,
    ExpenseService,
    FileUploadService,
    ResourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
