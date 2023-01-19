//Write your classes here

class Patient {
    constructor( ) {
    	// this.PatientID= 'PT202200001';
		// this.PatientName='Sakshi';
		// this.Gender='Female';
		// this.MobileNo= '9757676686';
		// this.IsRegistered= 'true';
		// this.RegisteredDate= '4/5/18';

		this.PatientID= '';
		this.PatientName='';
		this.Gender='';
		this.MobileNo= '';
		this.IsRegistered= 'true';
		this.RegisteredDate= '';
		// this.Address(){

		// 	this.StreetAddress='xyz.12 ncsljdnldsvn.road';
		// 	this.City='Bronx';
		// 	this.State='New York';
		// 	this.Country='Us';
		// 	this.ZipCode='';
		// 	this.Latitude='';
		// 	this.Longitude='';
			
		// 	}
		class Address {
    		constructor(ZipCode,Latitude,Longitude ) {

			this.StreetAddress='xyz.12 ncsljdnldsvn.road';
			this.City='Bronx';
			this.State='New York';
			this.Country='Us';
			this.ZipCode=ZipCode;
			this.Latitude=Latitude;
			this.Longitude=Longitude;
	         

		    }

		}
    }

}
let Patient1= new Patient();
let Patient2= new Patient();

		Patient1.PatientID= 'PT202200001';
		Patient1.PatientName='Sakshi';
		Patient1.Gender='Female';
		Patient1.MobileNo= '9757676686';
		// Patient1.IsRegistered= 'true';
		Patient1.RegisteredDate= 4/5/18;
		console.log(Patient1);

		Patient2.PatientID= 'PT202200002';
		Patient2.PatientName='Shivang';
		Patient2.Gender='Male';
		Patient2.MobileNo= '9757676686';
		// Patient2.IsRegistered= 'true';
		Patient2.RegisteredDate= 24/12/18;
		console.log(Patient2);

// Exports
// export { Patient };
// export { Doctor };
// export { Appointment };


class Address {
    constructor(ZipCode,Latitude,Longitude ) {

		this.StreetAddress='xyz.12 ncsljdnldsvn.road';
		this.City='Bronx';
		this.State='New York';
		this.Country='Us';
		this.ZipCode=ZipCode;
		this.Latitude=Latitude;
		this.Longitude=Longitude;
         

    }

}
let Address1= new Address('454576','78','45');
console.log(Address1);
		
let Address2= new Address('45468','78','44');
console.log(Address2);