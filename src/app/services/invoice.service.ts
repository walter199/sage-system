import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Invoice } from '../shared/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  invoicesRef!: AngularFireList<any>
  invoiceRef!: AngularFireObject<any>

  constructor(private db: AngularFireDatabase) { }

  // Create Invoice
  AddInvoice(invoice: Invoice) {
    this.invoicesRef.push({
      id: invoice.id,
      client: invoice.client,
      projectName: invoice.projectName,
      billDate: invoice.billDate,
      amount: invoice.amount,
      status: invoice.status
    })
  }

  // Fetch Single Invoice Object
  GetInvoice(id: string){
    this.invoiceRef = this.db.object('invoice/' + id)
    return this.invoiceRef
  }

  // Fetch Invoices List
  GetInvoicesLists() {
    this.invoicesRef = this.db.list('/invoices')
    return this.invoicesRef
  }

  // Update Invoice Object
  UpdateInvoice(invoice: Invoice) {
    this.invoiceRef.update({
      id: invoice.id,
      client: invoice.client,
      projectName: invoice.projectName,
      billDate: invoice.billDate,
      amount: invoice.amount,
      status: invoice.status
    })
  }

  // Delete Invoice Object
  DeleteInvoice(id: string){
    this.invoiceRef = this.db.object('invoices/' + id)
    this.invoiceRef.remove()
  }

}
