import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {

  constructor(private api :ApiService) { }

  ngOnInit(): void {
  }
  postPet(value:any){
    this.api.postPatient(value);
    console.log(value);
  }

}
