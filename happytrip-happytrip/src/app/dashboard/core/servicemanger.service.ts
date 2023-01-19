import { Injectable } from '@angular/core';
import { SearchService } from '../services/search.service';

@Injectable({
  providedIn: 'root'
})
export class ServicemangerService {
  ADULT_LIMIT:number=9;
  CHILDREN_LIMIT:number=9;
  INFANTS_LIMIT:number=5;
  constructor(private searchApi:SearchService) { }

  getAirports () {
    //Call to api to get the airports from backend
    let airports = this.searchApi.getAirports();
    console.log(airports);

    // Return the airports
    return airports;
  };

  getTravelClasses(){
     //Call to api to get the airports from backend
     let travelClass = this.searchApi.getAirports();
     console.log(travelClass);

     // Return the airports
     return travelClass;
  }

  getAdultLimit () {
    let ADULT_LIMIT = [];
    for (let i:any = 0; i <= ADULT_LIMIT; i++) {
      ADULT_LIMIT.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    }
    console.log(ADULT_LIMIT)
    return ADULT_LIMIT;
  };

  getChildrenLimit () {
    //Use for loop and push the values

  };

  getInfantsLimit (){
    //Use foreach loop and push the values
   
  };
}
