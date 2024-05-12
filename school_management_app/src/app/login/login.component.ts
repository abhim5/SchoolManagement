// login.component.ts

import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
  standalone: true
})
export class LoginComponent {

  loginObj: Login;
  constructor(private http: HttpClient) {
    this.loginObj = new Login();
  }

  onLogin() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    debugger
    console.log(this.loginObj);
    this.http.post('http://localhost:8080/Login', this.loginObj).subscribe((res: any)=>{
      
      if(res.result) {
        alert("Login Success");
      } else {
        alert(res.message);
      }
    })

  }
}

  export class Login {
    username: string;
    password: string;
    constructor() {
      this.username = ''
      this.password = ''
    }
  }

  //   username: string = '';
//   password: string = '';
//   errorMessage: string = '';

//   constructor(private http: HttpClient) {}

//   onSubmit() {
//     const credentials = { username: this.username, password: this.password };
//     this.http.post<any>('http://localhost:8080/login', credentials).subscribe(
//         response => {
//           // Authentication successful, redirect or perform other actions
//           console.log('Login successful:', response);
//         },
//         error => {
//           // Authentication failed, display error message
//           console.error('Login failed:', error);
//           this.errorMessage = 'Invalid username or password';
//         }
//       );
//   }
