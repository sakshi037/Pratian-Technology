class Flight {
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

class FlightCapacity {
  name: any;
numberofseats: any;
  constructor(name: any, numberofseats: any) {
      this.name = name;
      this.numberofseats = numberofseats;
  }
}

// Class creation
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

class FlightSchedule {
  flight: any;
airline: any;
date: any;
time: any;
duration: any;
seatsAvailability: any;
fromCity: any;
toCity: any;
routes: any[];
price: any;
  constructor(
      flight: any,
      airline: any,
      date: any,
      time: any,
      duration: any,
      seatsAvailability: any,
      fromCity: any,
      toCity: any,
      routes = [],
      price: any
  ) {
      this.flight = flight;
      this.airline = airline;
      this.date = date;
      this.time = time;
      this.duration = duration;
      this.seatsAvailability = seatsAvailability;
      this.fromCity = fromCity;
      this.toCity = toCity;
      this.routes = routes;
      this.price = price;
  }
}

class Passenger {
  s_no: any;
  name:string;
  age:number;
  gender:string;
  seat_no:number;
  status:string;
  constructor(s_no: any, name: string, age: number, gender: string, seat_no: number, status: string) {
      this.s_no = s_no;
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.seat_no = seat_no;
      this.status = status;

  }
}
class BookingInfo {
  Transaction_id: any;
From: any;
Airline: any;
FlightNoAndName: any;
To: any;
Date: any;
Schedule: any;
BoardingPoint: any;
DateofBoarding: any;
Duration: any;
  constructor(
      Transaction_id: any,
      From: any,
      Airline: any,
      FlightNoAndName: any,
      To: any,
      Date: any,
      Schedule: any,
      BoardingPoint: any,
      DateofBoarding: any,
      Duration: any
  ) {
      this.Transaction_id = Transaction_id;
      this.From = From;
      this.Airline = Airline;
      this.FlightNoAndName = FlightNoAndName;
      this.To = To;
      this.Date = Date;
      this.Schedule = Schedule;
      this.BoardingPoint = BoardingPoint;
      this.DateofBoarding = DateofBoarding;
      this.Duration = Duration;
  }
}

class PriceInfo {
  Fare: any;
AirlineFee: any;
Cleartrip_fee: any;
Total: any;
  constructor(
      Fare: any,
      AirlineFee: any,
      Cleartrip_fee: any,
      Total: any

  ) {
      this.Fare = Fare;
      this.AirlineFee = AirlineFee;
      this.Cleartrip_fee = Cleartrip_fee;
      this.Total = this.Fare + this.AirlineFee + this.Cleartrip_fee;

  }

}

class Baggage {
  baggageType: any;
  constructor(baggageType: any) {
      this.baggageType = baggageType;
  }
}

class Booking {
  schedule: any;
passangers: any[];
id: any;
bookingDateTime: any;
termsAndCondition: any;
price: any;
paymentInfo: any;
baggages: Map<any, any>;
  constructor(
      schedule: any,
      passangers = [],
      id: any,
      bookingDateTime: any,
      termsAndCondition: any,
      price: any,
      paymentInfo: any
  ) {
      this.schedule = schedule;
      this.passangers = passangers;
      this.id = id;
      this.bookingDateTime = bookingDateTime;
      this.termsAndCondition = termsAndCondition;
      this.price = price;
      this.paymentInfo = paymentInfo;
      this.baggages = new Map();
  }

  addBaggage(baggage: any, quantity: any) {
      this.baggages.set(baggage, quantity);
  }
}

class PaymentInfo {
  paymentId: any;
amount: any;
paymentStatus: any;
transactionNumber: any;
paymentDateTime: any;
  constructor(
      paymentId: any,
      paymentMode: any,
      amount: any,
      transactionNumber: any,
      paymentStatus: any,
      paymentDateTime: any
  ) {
      this.paymentId = paymentId;
      this.paymentId = paymentMode;
      this.amount = amount;
      this.paymentStatus = paymentStatus;
      this.transactionNumber = transactionNumber;
      this.paymentDateTime = paymentDateTime;
  }
}

class SearchInfo {
  direction: any;
fromCity: any;
toCity: any;
fromDate: any;
toDate: any;
adults: any;
children: any;
infants: any;
  constructor(direction: any, fromCity: any, toCity: any, fromDate: any, toDate: any, adults: any, children: any, infants: any) {
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

class City {
  id: any;
code: any;
name: any;
  constructor(id: any, code: any, name: any) {
      this.id = id;
      this.code = code;
      this.name = name;
  }
}

class Route {
  fromCity: any;
toCity: any;
distance: any;
  constructor(fromCity: any, toCity: any, distance: any) {
      this.fromCity = fromCity;
      this.toCity = toCity;
      this.distance = distance;
  }
}

class Airport {
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
class TravelClass {
  title: any;
code: any;
  constructor(code: any, title: any) {
      this.code = code;
      this.title = title;
  }
}

// Exports
export { Airline };
export { Flight };
export { FlightCapacity };
export { Baggage };
export { FlightSchedule };
export { Passenger };
export { Booking };
export { BookingInfo };
export { PriceInfo };
export { PaymentInfo };
export { SearchInfo };
export { City };
export { Route };
export { Airport };
export { TravelClass };
