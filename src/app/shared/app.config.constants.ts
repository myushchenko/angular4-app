import { InjectionToken } from '@angular/core';
import { IAppConfig } from './app.config.interface';

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');

export const AppConfig: IAppConfig = {
    geoIpUrl: 'http://freegeoip.net/json/',
};


