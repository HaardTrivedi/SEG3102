export class AddressEntry {
    public firstName: string;
    public lastName: string;
    public phone?: string;
    public email?: string;
    public notes?: string;
    public street?: string;
    public city?: string;
    public country?: string;
    public postalCode?: string;

    constructor(firstName?: string, lastName?: string, phone?: string, email?: string, notes?: string, street?: string, city?: string, country?: string, postalCode?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.notes = notes;
        this.street = street;
        this.city = city;
        this.country = country;
        this.postalCode = postalCode;
    }
}
