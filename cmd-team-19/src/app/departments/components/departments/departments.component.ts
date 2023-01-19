
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
Departments:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getDepartment().subscribe(data => {
      this.Departments = data;
    });
  }
  temp:any;
  setDep(value:any){
    this.temp=value.id;
    console.log(value.id);
  }
  delDep(){
    this.api.delete_appointment(this.temp);
  }
}


