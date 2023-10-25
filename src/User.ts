// import { faker } from '@faker-js/faker';

const { faker } = require('@faker-js/faker');
import {Mappable  } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number
  }
  color: string = "red";

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: parseFloat(faker.location.latitude()),
      lng: parseFloat(faker.location.longitude()),
    }
  }

  markerContent(): string{
    return `User Name: ${this.name}`;
  }
}



