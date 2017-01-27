import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Todo List";
  welcomeMsg: string = "";

  constructor(private router: Router) {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}

