import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  roleOperador: string = localStorage.getItem('roleOperador');

  constructor(
    private route: Router
  ) { }



  logout() {
    localStorage.clear()
    this.route.navigate(['/'])
  }

}
