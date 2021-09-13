import { InvoiceService } from './../../../../services/invoice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {
  public invoiceForm!: FormGroup

  constructor(public invoiceService: InvoiceService, public fb: FormBuilder) { }

  ngOnInit() {
    this.invoiceService.GetInvoicesLists()
    this.invoicForm()
  }

  invoicForm(){
    this.invoiceForm = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(1)]],
    client: ['', [Validators.required, Validators.minLength(1)]],
    projectName: ['', [Validators.required, Validators.minLength(1)]],
    billDate: ['', [Validators.required, Validators.minLength(1)]],
    amount: ['', [Validators.required, Validators.minLength(1)]],
    status: ['', [Validators.required, Validators.minLength(1)]]
    })
  }

  get id() {
    return this.invoiceForm.get('id')
  }

  get client() {
    return this.invoiceForm.get('client')
  }

  get projectName() {
    return this.invoiceForm.get('projectName')
  }

  get billDate() {
    return this.invoiceForm.get('billDate')
  }

  get amount() {
    return this.invoiceForm.get('amount')
  }

  get status() {
    return this.invoiceForm.get('status')
  }
  
  ResetForm() {
    this.invoiceForm.reset()
  }

  submitInvoiceData() {
    this.invoiceService.AddInvoice(this.invoiceForm.value)
    this.ResetForm()
  }
}
