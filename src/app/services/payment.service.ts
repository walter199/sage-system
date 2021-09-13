import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Payment } from '../shared/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentsRef!: AngularFireList<any>
  paymentRef!: AngularFireObject<any>

  constructor(private db: AngularFireDatabase) { }

  //Create Payment
  AddPayment(payment: Payment) {
    this.paymentsRef.push({
      id: payment.id,
      client: payment.client,
      projectName: payment.projectName,
      date: payment.date,
      payMethod: payment.payMethod,
      amount: payment.amount
    })
  }

  // Fetch Single Payment Object
  GetPayment(id: string) {
    this.paymentRef = this.db.object('finance/' + id)
    return this.paymentRef
  }

  // Fetch Payments List
  GetPaymentsList() {
    this.paymentsRef = this.db.list('/finance')
    return this.paymentsRef
  }

  // Update Payment Object
  UpdatePayment(payment: Payment) {
    this.paymentRef.update({
      id: payment.id,
      client: payment.client,
      projectName: payment.projectName,
      date: payment.date,
      payMethod: payment.payMethod,
      amount: payment.amount
    })
  }

  // Delete Payment Object
  DeletePayment(id: string){
    this.paymentRef = this.db.object('finance/' + id)
    this.paymentRef.remove()
  }
  
}
