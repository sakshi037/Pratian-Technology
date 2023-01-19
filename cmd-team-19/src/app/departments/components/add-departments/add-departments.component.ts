import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { AddAppointmentDistributorService } from 'src/app/appointments/core/add-appointment-distributor.service';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {
  

  constructor(private addAppointmentDistributorService:AddAppointmentDistributorService,  private api:ApiService) { }

  ngOnInit(): void {
  }
  addDep(value:any){
    this.api.postDepartment(value);
    console.log(value);

  }
  postDep(value:any){
    this.api.postDepartment(value);
    console.log(value);

  }
  
}
