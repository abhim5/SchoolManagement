import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  username: string | undefined;
  password: string | undefined;
  title: any;

  onSubmit() {
    console.log('Form submitted:', this.username, this.password);
    // Here you can perform login logic
  }
}