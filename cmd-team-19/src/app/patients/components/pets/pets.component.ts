import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  
  
  
  constructor(private api:ApiService) { }
  Patients: any;

  ngOnInit(): void {
    this.api.getPatient().subscribe((data: any)=>{
      this.Patients=data;
    });
  }


  temp:any;
  setPet(value:any){
    this.temp=value.id;
    console.log(value.id);
  }
  delPet(){
    this.api.deletePatient(this.temp);
  }


  list:boolean=true;
  card:boolean=false;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }
}
