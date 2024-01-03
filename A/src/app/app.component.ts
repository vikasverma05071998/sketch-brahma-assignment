import { Component } from '@angular/core';
import { HomeServiceService } from './home-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  num1: number = 0;
  color: number = 0;
  changeColorCount: number[] = [];
  constructor() {}
  ngOnInit() {}
  count: number[] = [];
  counter() {
    this.num1 += 1;
    this.count.push(this.num1);
    this.changeColorCount.push(0);
  }
  selectedCircle: number | null = null;
  toggleColor(index: number): void {
    if (this.selectedCircle === index) {
      this.selectedCircle = null;
      this.changeColorCount[index] = 0;
    } else {
      this.selectedCircle = index;
      this.changeColorCount[index] = 1;
    }
  }
}
