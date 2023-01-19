export class Flight {
  id: any;
number: any;
name: any;
flightcapacity: any[];
airline: any;
  constructor(id: any, number: any, name: any, flightcapacity = [], airline: any) {
      this.id = id;
      this.number = number;
      this.name = name;
      this.flightcapacity = flightcapacity;
      this.airline = airline;
  }
}
