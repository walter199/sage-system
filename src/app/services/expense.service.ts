import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Expense } from '../shared/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expensesRef!: AngularFireList<any>
  expenseRef!: AngularFireObject<any>

  constructor(private db: AngularFireDatabase) { }

  // Create Expense
  AddExpense(expense: Expense) {
    this.expensesRef.push({
      id: expense.id,
      date: expense.date,
      title: expense.title,
      description: expense.description,
      projectName: expense.projectName,
      amount: expense.amount
    })
  }

  // Fetch Single Expense Object
  GetExpense(id: string) {
    this.expenseRef = this.db.object('expenses/' + id)
    return this.expenseRef
  }

  // Fetch Expenses List
  GetExpensesList() {
    this.expensesRef = this.db.list('/expenses')
    return this.expensesRef
  }

  //Update Expenses Object
  UpdateExpense(expense: Expense) {
    this.expenseRef.update({
      id: expense.id,
      date: expense.date,
      title: expense.title,
      description: expense.description,
      projectName: expense.projectName,
      amount: expense.amount
    })
  }

  //Delete Expense Object
  DeleteExpense(id: string) {
    this.expenseRef = this.db.object('expenses/' + id)
    this.expenseRef.remove()
  }


}
