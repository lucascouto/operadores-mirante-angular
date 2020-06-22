import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsService } from './globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  constructor(
    private route: Router,
    public globals: GlobalsService
  ) { }

  logout() {
    localStorage.clear()
    this.route.navigate(['/'])
    this.globals.mostrarMenu = false
  }

}
