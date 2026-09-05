import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-home-loan-emi',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './emi.html',
  styleUrl: './emi.css',
})
export class HomeLoanEmi {
  loanAmount = 5000000;
  interestRate = 8.5;
  tenure = 20;

  emi = 0;
  totalInterest = 0;
  totalPayment = 0;

  constructor() {
    this.calculateEMI();
  }

  calculateEMI(): void {
    const principal = Number(this.loanAmount);
    const annualRate = Number(this.interestRate);
    const years = Number(this.tenure);

    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    if (monthlyRate === 0) {
      this.emi = principal / months;
    } else {
      this.emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    }

    this.totalPayment = this.emi * months;
    this.totalInterest = this.totalPayment - principal;
  }
}
