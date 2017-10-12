import { Injectable } from '@angular/core';
import { RoutesRecognized, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Title } from '@angular/platform-browser';

@Injectable()
export class LayoutService {
    private titleChangeSource = new Subject<string>();
    public changeTitle$ = this.titleChangeSource.asObservable();

    constructor(private titleService: Title) {}

    emitChangeTitle(change: string) {
        // set browser title page
        this.titleService.setTitle(change);
        this.titleChangeSource.next(change);
    }
}
