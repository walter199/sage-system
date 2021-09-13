import { PaymentService } from './../../services/payment.service';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Payment } from 'src/app/shared/payment';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  dialogRef!: MatDialogRef <any> 
  p: number = 1
  Payment!: Payment[]

  constructor(public dialog: MatDialog, public paymentService: PaymentService) { }

  ngOnInit(): void {
    this.dataState()
  }

  dataState() {
    this.paymentService.GetPaymentsList().valueChanges().subscribe(data => {
      this.Payment = data
    })
  }

  deleteTask(payment: { $key: string; }) {
    if(window.confirm('Are you sure you want to delete this task ?')) {
      this.paymentService.DeletePayment(payment.$key)
    }
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddPaymentComponent, {
        height: '500px',
        width: '1000px'
    });
    
  }
}
