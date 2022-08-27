import faker from 'faker/dist/faker.js';
import { Mappable } from './CustomMap';

export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'black';

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
        
    };

    markerContent(): string{
        return `
        <h1>Company name: ${this.companyName}</h1>
        <h3>Company Catchphrase: ${this.catchPhrase}</h3>`;
    };

}