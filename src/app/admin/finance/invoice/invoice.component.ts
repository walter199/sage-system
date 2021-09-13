import { InvoiceService } from './../../../services/invoice.service';
import { Invoice } from './../../../shared/invoice';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  dialogRef!: MatDialogRef <any> 
  p: number = 1
  Invoice!: Invoice[]

  constructor(public dialog: MatDialog, public invoiceService: InvoiceService) { }

  ngOnInit() {
    this.dataState()
  }

  dataState() {
    this.invoiceService.GetInvoicesLists().valueChanges().subscribe(data => {
      this.Invoice = data
    })
  }

  deleteTask(invoice: { $key: string; }) {
    if(window.confirm('Are you sure you want to delete this task ?')) {
      this.invoiceService.DeleteInvoice(invoice.$key)
    }
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddInvoiceComponent, {
        height: '500px',
        width: '1000px'
    });
    
  }
}

