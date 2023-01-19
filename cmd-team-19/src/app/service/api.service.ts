import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public appoinment:any;
  constructor(private http: HttpClient){}


  //Appointments....................................................................................................................
  get_appointment() {
    return this.http.get('http://localhost:3000/appointment')
    
  }
  post_appointment(data:any) {
      this.http.post('http://localhost:3000/appointment', data).subscribe(data => {
      console.log(data);
  
});
}
delete_appointment(id:any) {
  this.http.delete('http://localhost:3000/appointment/'+id).subscribe(data => {
});
window.location.reload();
}




//Department.......................................................................................................
getDepartment(){
  return this.http.get('http://localhost:3000/Departments')
}

postDepartment(data:any) {
  this.http.post('http://localhost:3000/Departmentst', data).subscribe(data =>{
    console.log(data);
  });
}


deleteDepartment(id:any) {
  this.http.delete('http://localhost:3000/Departments/'+id).subscribe(data=>{
    
  });
  window.location.reload();
}


//patient.....................................................................................................
patientUrl='http://localhost:3000/Patients'
getPatient(){
  return this.http.get(this.patientUrl);
}

postPatient(data:any) {
  this.http.post('http://localhost:3000/Patients',data).subscribe(data=>{
    console.log(data);
  });
}

deletePatient(id:any){
  this.http.delete('http://localhost:3000/Patients/'+id).subscribe(data=>{

  });
  window.location.reload();
}



//doctors...........................................................................
getDoctors(){
  return this.http.get('http://localhost:3000/Doctors')
}

postDoctors(data:any){
  this.http.post('http://localhost:3000/Doctors',data).subscribe(data=>{
    console.log(data);
  });
}

deleteDoctors(id:any){
  this.http.delete('http://localhost:3000/Doctors/'+id).subscribe(data=>{

  });
  window.location.reload();}
}