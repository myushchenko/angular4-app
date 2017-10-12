import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { UserItem } from './user.model';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class UserService {

  constructor(private localStorageService: LocalStorageService, private snackBar: MatSnackBar) { }

  saveProfile(user: UserItem, phoneCode: string): Observable<boolean> {
    const saveProfileSubject = new Subject<boolean>();

    Object.assign(user, {phoneCode});

    this.localStorageService.set('user', user);

    const snackBarRef = this.snackBar.open('Profile has been saved!', '', { duration: 500 });

    snackBarRef.afterDismissed().subscribe(() => {
      saveProfileSubject.next(true);
    });

    return saveProfileSubject;
  }

  get user() {
    return new UserItem(this.localStorageService.get('user'));
  }

}
