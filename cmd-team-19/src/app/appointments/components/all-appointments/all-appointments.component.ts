// import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Component,OnInit} from '@angular/core';
import { ApiService } from 'src/app/service/api.service';



@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {

  constructor(private api:ApiService) { }
  appointment:any;
  ngOnInit(): void {
    this.api.get_appointment().subscribe(data=>{
      this.appointment = data;
    });

  }
  temp:any;
  set_app(value:any){
    this.temp=value.id;
    console.log(value.id);
  }
  del_app(){
    this.api.delete_appointment(this.temp);
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
    
  // users=[
  //   {URL:'assets/img/patient4.jpg', name:'Cristina Groves',description:'United States, San Francisco'},
  //   {URL:'assets/img/patient5.jpg', name:'Marie Wells',description:'United States, San Francisco'},
  //   {URL:'assets/img/patient3.jpg', name:'Henry Daniels',description:'United States, San Francisco'},
  //   {URL:'assets/img/patient6.jpg', name:'Mark Hunter',description:'United States, San Francisco'},
  //   {URL:'assets/img/patient7.jpg', name:'Michael Sullivan',description:'United States, San Francisco'},
  //   {URL:'assets/img/patient8.jpg', name:'Linda Barrett',description:'United States, San Francisco'},
  //   {URL:'assets/img/patient9.jpg', name:'Ronald Jacobs',description:'United States, San Francisco'},
  //   {URL:'assets/img/patient10.jpg', name:'Albert Sandoval',description:'United States, San Francisco'},
  //   {URL:'assets/img/patient11.jpg', name:'Diana Bailey',description:'United States, San Francisco'},
  //   {URL:'assets/img/patient12.jpg', name:'Shirley Willis',description:'United States, San Francisco'},
  //   {URL:'assets/img/patient-thumb-02.jpg', name:'Pamela Curtis',description:'United States, San Francisco'},
  //   {URL:'assets/img/patient-thumb-01.jpg', name:'Justin Parker',description:'United States, San Francisco'},
    
  // ]

  

