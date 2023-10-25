import { Mappable } from "./CustomMap";

const { faker } = require('@faker-js/faker');

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number
  }
  color: string = "red";
  
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.location.latitude()),
      lng: parseFloat(faker.location.longitude()),
    }
  }

  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1> 
      <h3> Catch Phrase: ${this.catchPhrase}</h3>
   </div>
    `;
  }
}
