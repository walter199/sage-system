import { ExpenseService } from './../../../services/expense.service';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Expense } from 'src/app/shared/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  dialogRef!: MatDialogRef <any> 
  p: number = 1
  Expense!: Expense[]

  constructor(public dialog: MatDialog, public expenseService: ExpenseService) { }

  ngOnInit() {
    this.dataState()
  }

  dataState() {
    this.expenseService.GetExpensesList().valueChanges().subscribe(data => {
      this.Expense = data
    })
  }

  deleteExpense(expense: { $key: string; }) {
    if(window.confirm('Are you sure you want to delete this task ?')) {
      this.expenseService.DeleteExpense(expense.$key)
    }
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddExpenseComponent, {
        height: '500px',
        width: '1000px'
    });
    
  } 
}
