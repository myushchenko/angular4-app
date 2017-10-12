import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserItem } from '../core/user/user.model';
import { UserService } from '../core/user/user.service';
import { LayoutService } from '../core/layout.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  user: UserItem;

  constructor(
    private router: Router,
    private userService: UserService,
    private layoutService: LayoutService) { }

  ngOnInit() {
    // change title
    this.layoutService.emitChangeTitle('Hello Page');

    this.user = this.userService.user;

    if (!this.user.name) {
        this.back();
    }
  }

  back() {
    this.router.navigate(['/']);
  }

}
