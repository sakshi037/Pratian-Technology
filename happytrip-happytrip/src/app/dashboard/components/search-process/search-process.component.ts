import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import AirportDetails from '../../store/airports.json';
import TravelClass from '../../store/travelClasses.json';
import AirlineClass from '../../store/flights.json';
import { ServicemangerService } from '../../core/servicemanger.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
interface Airport {
  IATA_code: string;
  ICAO_code: string;
  airport_name: string;
  city_name: string;
}
@Component({
  selector: 'app-search-process',
  templateUrl: './search-process.component.html',
  styleUrls: ['./search-process.component.css'],
})
export class SearchProcessComponent implements OnInit {
  selected: any;
  fromCity: any;

  toCity: any;
  adultLimitData!: number[];
  childrenLimitData!: number[];
  infantsLimitData!: number[];
  adultsValue: any;
  infantsValue: any;
  childrensValue: any;
  Adults: any;
  selectedValue = '';
  constructor(

    private searchManager: ServicemangerService,
    private router: Router,
  ) {}

  form =new FormGroup({

  });
  ngOnInit(): void {
    this.adultLimitData = this.searchManager.getAdultLimit();

    // this.searchManager.getAirports();
    // this.searchManager.getTravelClasses();

  }

  city: any = AirportDetails;
  // travel: any = TravelClass;
  airline: any = AirlineClass;
  websiteList: any = ['Javatpoint.com', 'HDTuto.com', 'Tutorialandexample.com'];

  selectedName: any = '';

  emptyToCity() {
    if (this.toCity == null) {
      alert('Enter a To city value');
    }
  }
  selectedAdultValue(e: any) {
    this.Adults = e.target?.value.index;
    console.log('adult value: ' + this.Adults.value);
  }

  selectedInfantsvalue(e: any) {
    this.infantsValue = e.target.value;
  }

  selectedChildrenvalue(e: any) {
    this.childrensValue = e.target.value;
  }

  reverseCities() {
    if (this.fromCity == undefined) {
      alert('Please select the cities');
    } else {
      var temp = this.fromCity;
      this.fromCity = this.toCity;
      this.toCity = temp;
    }
  }

}
