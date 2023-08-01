import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { AuthModel } from '../authmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form= new AuthModel()

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  onLoginSubmit() {
    this.authService.login(this.form).subscribe(
      (response) => {
        document.cookie = `token=${response.data}`
        this.router.navigate(['admin/home'])
      },
      (error) => {
        console.error('Login gagal:', error);
      }
    );
  }
}
