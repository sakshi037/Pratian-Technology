import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: any;

  constructor(private api :ApiService) { }

  ngOnInit(): void {
    this.api.getDoctors().subscribe(data => {
      this.doctors = data
    })
  }
  temp:any;
  setDoc(value:any){
    this.temp=value.id;
    console.log(value.id);
  }
  delDoc(){
    this.api.deleteDoctors(this.temp);
  }



  list:boolean=false;
  card:boolean=true; 

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }

}
