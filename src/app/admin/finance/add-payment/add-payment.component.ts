import { PaymentService } from './../../../services/payment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {
  public paymentForm!: FormGroup

  constructor(public paymentService: PaymentService, public fb: FormBuilder) { }

  ngOnInit() {
    this.paymentService.GetPaymentsList()
    this.paymeForm()
  }

  paymeForm(){
    this.paymentForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(1)]],
      client: ['', [Validators.required, Validators.minLength(1)]],
      projectName: ['', [Validators.required, Validators.minLength(1)]],
      date: ['', [Validators.required, Validators.minLength(1)]],
      payMethod: ['', [Validators.required, Validators.minLength(1)]],
      amount: ['', [Validators.required, Validators.minLength(1)]]
    })
  }

  get id() {
    return this.paymentForm.get('id')
  }

  get client() {
    return this.paymentForm.get('client')
  }

  get projectName() {
    return this.paymentForm.get('projectName')
  }

  get date() {
    return this.paymentForm.get('date')
  }

  get payMethod() {
    return this.paymentForm.get('payMethod')
  }


  get amount() {
    return this.paymentForm.get('amount')
  }

  ResetForm() {
    this.paymentForm.reset()
  }

  submitPaymentData() {
    this.paymentService.AddPayment(this.paymentForm.value)
    this.ResetForm()
  }

}
