import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LocationItem } from '../core/location/location.model';
import { LocationService } from '../core/location/location.service';
import { UserItem } from '../core/user/user.model';
import { UserService } from '../core/user/user.service';
import { LayoutService } from '../core/layout.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^(\+|\d)[0-9]{7,16}$/;

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent implements OnInit, OnDestroy  {
    private unsubscribe$: Subject<void> = new Subject<void>();
    private user: UserItem;
    private phoneCodeMap = {
        '65': 8,
        '380': 9
    };

    // datepicker default settings
    startDate = new Date(1990, 0, 1);
    minDate = new Date(1900, 0, 1);
    maxDate = new Date();

    userForm: FormGroup;
    phoneCode: string;
    phoneCodeLimit: number;
    enableTouchUi: boolean;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private userService: UserService,
        private layoutService: LayoutService,
        private locationService: LocationService) {
            this.user =  this.userService.user;
        }

    ngOnInit() {
        // change title
        this.layoutService.emitChangeTitle('User Profile Page');

        // build reactive form validation
        this.buildForm();

        // load current user location info
        this.getLocationInfo();

        // set touch for datepicker
        this.enableTouchUi = window.innerWidth <= 768;
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.enableTouchUi = event.target.innerWidth <= 768;
    }

    submit(user: UserItem): void {
        if (!this.userForm.valid) {
            return;
        }
        this.userService
            .saveProfile(user, this.phoneCode)
            .takeUntil(this.unsubscribe$)
            .subscribe(() => this.router.navigate(['/hello']));
    }

    private getLocationInfo(): void {
        this.locationService
        .getLocation()
        .takeUntil(this.unsubscribe$)
        .subscribe((location: LocationItem) =>  {
            this.phoneCode = location.country.phoneCode;
            this.phoneCodeLimit = this.phoneCodeMap[this.phoneCode] || 10;
            this.userForm.controls['country'].setValue(this.user.country || location.country.name);
            this.userForm.controls['city'].setValue(this.user.city || location.city);
        });
    }

    private buildForm(): void {
      this.userForm = this.fb.group({
        'name': [this.user.name, Validators.required],
        'email': [this.user.email, Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
        'phone': [this.user.phone, Validators.compose([Validators.required, Validators.pattern(PHONE_REGEX)])],
        'dateOfBirth': [this.user.dateOfBirth, Validators.required],
        'country': [this.user.country, Validators.required],
        'city': [ this.user.city ],
        'state': [this.user.state ]
      });
    }

}
