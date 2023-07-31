import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    if (!this.authService.isLoggedIn()) {
      this.authService.redirectToLogin();
      alert("anda harus login terlebih dahulu")
    }
  }
}
