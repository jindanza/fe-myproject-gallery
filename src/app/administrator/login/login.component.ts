import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { AuthModel } from '../authmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form= new AuthModel()

  constructor(private authService: AuthServiceService) {}

  onLoginSubmit() {
    this.authService.login(this.form).subscribe(
      (response) => {
        console.log('Login berhasil:', response);
      },
      (error) => {
        console.error('Login gagal:', error);
      }
    );
  }
}
