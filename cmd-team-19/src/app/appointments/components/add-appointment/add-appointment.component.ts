import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { AddAppointmentDistributorService } from '../../core/add-appointment-distributor.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  constructor(private addAppointmentDistributorService:AddAppointmentDistributorService,private api:ApiService) { }


  ngOnInit(): void {

    
  }
  addApp(value:any){
    this.api.post_appointment(value);
    console.log(value);

  }
  



  // Logic for the submit
  onSubmit() {

  }
}
