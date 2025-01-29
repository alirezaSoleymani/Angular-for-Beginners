import { Component } from '@angular/core';

@Component({
  selector: 'count',
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss',
})
export class CountComponent {
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
