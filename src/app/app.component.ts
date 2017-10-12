import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutService } from './core/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appTitle = 'Angular4 App';

  constructor(private router: Router, private layoutService: LayoutService) { }

  ngOnInit() {
    this.layoutService.changeTitle$.subscribe(text => {
      this.appTitle = text;
    });
  }

  about() {
    this.router.navigate(['/about']);
  }
}
