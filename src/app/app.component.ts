import { Component, OnInit } from '@angular/core';
import { LayoutService } from './core/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appTitle = 'Angular4 App';

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.layoutService.changeTitle$.subscribe(text => {
      this.appTitle = text;
    });
  }
}
