import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  postDoc(value:any){
    this.api.postDoctors(value);
    console.log(value);
  }

}
