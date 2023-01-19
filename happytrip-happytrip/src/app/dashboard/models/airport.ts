export class Airport {
  IATACode: any;
  ICAOCode: any;
  city: any;
  airportName: any;
  constructor(IATA_code: any, ICAO_code: any, city: any, airportName: any) {
    this.IATACode = IATA_code;
    this.ICAOCode = ICAO_code;
    this.city = city;
    this.airportName = airportName;
  }
}
