import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count = 1;

  ngOnInit() {
    this.startCounting();
  }

  startCounting() {
    setInterval(() => {
      if (this.count < 10) {
        this.count++;
      }
    }, 500);
  }
}
