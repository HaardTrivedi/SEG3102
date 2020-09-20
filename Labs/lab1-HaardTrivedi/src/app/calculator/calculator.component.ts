import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  val1 = 0;
  val2 = 0;
  answer = '0';
  constructor() { }

  add(value1: string, value2: string): void {
    this.val1 = Number(value1);
    this.val2 = Number(value2);
    this.answer = (this.val1 + this.val2).toFixed(2);
  }

  subtract(value1: string, value2: string): void {
    this.val1 = Number(value1);
    this.val2 = Number(value2);
    this.answer = (this.val1 - this.val2).toFixed(2);
  }
  
  multiply(value1: string, value2: string): void {
    this.val1 = Number(value1);
    this.val2 = Number(value2);
    this.answer = (this.val1 * this.val2).toFixed(2);
  }
  
  divide(value1: string, value2: string): void {
    this.val1 = Number(value1);
    this.val2 = Number(value2);
    if (this.val2 == 0){
      this.answer = 'undefined';
    } else {
      this.answer = (this.val1 / this.val2).toFixed(2);
    }
  }

}
