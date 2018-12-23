export class UserModule {
    public userCompany: string;
    public userName: string;
    public userPhone: string;
    public userSite: string;
    public userEmail: string;

    constructor() {
        this.userName = 'Швецова Мария Валерьевна';
        this.userCompany = 'Индивидуальный предприниматель';
        this.userEmail = 'mary@tochka.com';
        this.userSite = 'www.mary.com';
        this.userPhone = '+79193977777';
    }
}