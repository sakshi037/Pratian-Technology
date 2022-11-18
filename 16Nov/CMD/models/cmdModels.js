//Write your classes here



class Address{
    constructor(Street, City, State, Country, ZipCode, Latitude, Longitude){
        this.Street=Street;
        this.City=City;
        this.State=State;
        this.Country=Country;
        this.ZipCode=ZipCode;
        this.Latitude=Latitude;
        this.Longitude=Longitude;
    }
}

var Address1 = new Address('Rajiv Nagar', 'Vizag', 'Andhra Pradesh', 'India', '530046', '0846684644', '6874684684');

class Patient{
    constructor(ID, Name, Gender,  mobileNo, isRegistered, registeredDate, Address) {
        this.ID = ID;
        this.Name = Name;
        this.Gender = Gender;
        this.mobileNo = mobileNo;
        this.isRegistered = isRegistered;
        this.registeredDate = registeredDate;
        this.Address=Address;

    }
}

var Patient1 = new Patient('PT202200001', 'Ravi', 'Male', '9866338020', 'Yes', '05/09/2009',Address1);




class Doctor{
    constructor(Name, ID, Gender, Specialty, Degree, YearsOfExperience, PhotoURL){
        this.Name=Name;
        this.ID=ID;
        this.Gender=Gender;
        this.Specialty=Specialty;
        this.Degree=Degree;
        this.YearsOfExperience=YearsOfExperience;
        this.PhotoURL=PhotoURL;
    }
}

var Doctor1 = new Doctor('Dr.Hari', 'DT202200001', 'Male', 'Physician', 'MBBS', '04', 'ASKAJVBVHJS');


class Appointment {
    constructor(Id,Date,Time, DurationOfAppointment, Patient, Doctor, Reason, Status){
        this.Id=Id;
        this.Date=Date;
        this.Time=Time;
        this.DurationOfAppointment=DurationOfAppointment;
        this.Patient=Patient;
        this.Doctor=Doctor;
        this.Reason=Reason;
        this.Status=Status;
    }
}

var Appointment1 = new Appointment('AP202200001','05/09/2020','16:30','30min',Patient1, Doctor1, "Head Ache", 'Active')

console.log(Appointment1)



// Exports
//export { Patient };
//export { Doctor };
//export { Appointment };
