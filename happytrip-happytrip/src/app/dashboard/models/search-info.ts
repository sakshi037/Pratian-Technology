export class SearchInfo {
  direction: any;
  fromCity: any;
  toCity: any;
  fromDate: any;
  toDate: any;
  adults: any;
  children: any;
  infants: any;
  constructor(
    direction: any,
    fromCity: any,
    toCity: any,
    fromDate: any,
    toDate: any,
    adults: any,
    children: any,
    infants: any
  ) {
    this.direction = direction;
    this.fromCity = fromCity;
    this.toCity = toCity;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.adults = adults;
    this.children = children;
    this.infants = infants;
  }
}
