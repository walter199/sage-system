import { ExpenseService } from './../../../../services/expense.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  public expenseForm!: FormGroup

  constructor(public expenseService: ExpenseService, public fb: FormBuilder) { }

  ngOnInit() {
    this.expenseService.GetExpensesList()
    this.expForm()
  }

  expForm() {
    this.expenseForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(1)]],
      date: ['', [Validators.required, Validators.minLength(1)]],
      title: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      projectName: ['', [Validators.required, Validators.minLength(1)]],
      amount: ['', [Validators.required, Validators.minLength(1)]]
    })
  }

  get id() {
    return this.expenseForm.get('id')
  }

  get date() {
    return this.expenseForm.get('date')
  }

  get title() {
    return this.expenseForm.get('title')
  }

  get description() {
    return this.expenseForm.get('description')
  }

  get projectName() {
    return this.expenseForm.get('projectName')
  }

  get amount() {
    return this.expenseForm.get('amount')
  }

  ResetForm() {
    this.expenseForm.reset()
  }

  submitExpenseData() {
    this.expenseService.AddExpense(this.expenseForm.value)
    this.ResetForm()
  }

}
