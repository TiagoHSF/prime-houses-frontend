import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Prime Houses';

  public exibeSidebar: boolean = true;

  constructor(private router: Router, private _routeCheckService: AppService) {
    this.router.events.subscribe((event) => {
      const segments = this.router.url.split('/');
      const path = segments[1];

      if (path === 'acesso' || path === 'cadastro') {
        this.exibeSidebar = false;
      } else {
        this.exibeSidebar = true;
      }
    });
  }

  ngOnInit() {}
}
