class Airline {
  id: any;
  name: any;
  logo: any;
  code: any;
  flights: any[];
  constructor(id: any, name: any, logo: any, code: any, flights = []) {
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.code = code;
    this.flights = flights;
  }
}
