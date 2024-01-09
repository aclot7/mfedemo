import { Component } from '@angular/core';
import { AuthService } from 'projects/libs/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nameobs: Observable<string>;
  constructor(private authService: AuthService) {
    this.authService.setName("yossi");
    this.nameobs = this.authService.getName();
  }
  title = 'host-app';

  changeName() {
    this.authService.setName("dana");
  }



}
