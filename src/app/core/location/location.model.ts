import { ContryPhoneCodes } from './country-phone-code';

export class LocationItem {
    public city: string;
    public country: CountryItem;
    public state: string;

    constructor(data: any) {
        this.city = data.city;
        this.country = new CountryItem(data.country_name, data.country_code);
    }
}

export class CountryItem {
    name: string;
    code: string;
    phoneCode: string;

    constructor(name: string, code?: string) {
        this.name = name;
        this.code = code;
        this.phoneCode = ContryPhoneCodes[code];
    }
}
