export class UserItem {
    public name: string;
    public email: string;
    public phone: string;
    public dateOfBirth: string;
    public country: string;
    public city: string;
    public state: string;
    public phoneCode: string;

    constructor(item: any) {
        Object.assign(this, item);
    }

    get fullPhone(): string {
        return ['+', this.phoneCode, this.phone].join('');
    }
}
