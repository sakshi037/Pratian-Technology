import { Injectable } from '@angular/core';
import { Airport, City, TravelClass } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  city: any;
  constructor() {

  }

  async getAirports() {
    return await fetch("../store/airports.json")
      .then( function (data) {
        //Empty Array to be returned
        return  data.json();
      })
      .then( (data) => {
        // let airports = data;
        let airportslist = new Array();

        // let endData = new Array();
        for (let airport of data.airports) {

          // Creating City Object to be stored in airport
          let city = new City(undefined, undefined, airport.city_name);

          //Store the airport in the airports array
          airportslist.push(
            new Airport(
              airport.IATA_code,
              airport.ICAO_code,
              city,
              airport.airport_name
            )
          );

          // var option = `${airport.IATA_code}: ${airport.airport_name}, ${city.name}`;
          // endData.push(String(option));
          //Store airport in LocalStore - This method will be removed later once APIs are ready
          sessionStorage.setItem("airports", JSON.stringify(airportslist));
          //   //Return airports back to the caller

        }
        return  airportslist;
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  async getTravelClasses() {

    //Write the code here to implement the travel class

  }
}
