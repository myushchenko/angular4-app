import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { LocationItem } from './location.model';
import { APP_CONFIG } from '../../shared/app.config.constants';
import { IAppConfig } from '../../shared/app.config.interface';

@Injectable()
export class LocationService {

    constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) {}

    getLocation(): Observable<LocationItem> {
        return this.http
            .get(this.config.geoIpUrl)
            .map((res: Response) => new LocationItem(res.json()))
            .catch(error => Observable.throw(error.json()));

      }

}
