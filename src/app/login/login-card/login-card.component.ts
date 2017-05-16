import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.less']
})
export class LoginCardComponent {

  users;
  isDataAvailable = false;

  constructor(private http: HttpService, private router: Router) {
    this.http.getAllUsers().subscribe(data => {
      this.users = data;
      this.isDataAvailable = true;
    });
  }

  loadChat(id) {
    this.router.navigate(['/chat', {'id': id}]);
  }

}
