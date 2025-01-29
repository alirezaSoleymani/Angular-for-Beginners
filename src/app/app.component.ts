import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountComponent } from './count/count.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngcourse';
}
