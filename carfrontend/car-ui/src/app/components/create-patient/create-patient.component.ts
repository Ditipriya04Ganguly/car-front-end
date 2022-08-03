import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ListofPatient } from 'src/app/common/listof-patient';
import { Patient } from 'src/app/common/patient';
import { Disease, PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css'],
})
export class CreatePatientComponent implements OnInit {
  patient: Patient = new Patient();

  patientDetails?: Disease[];

  listpatient?: Patient[];

  listofpatient: ListofPatient= new ListofPatient();


  constructor(private patientService: PatientService) {}

  ngOnInit(): void {}

  onSubmit() {
    //this.savePatient();
    this.addPatient();
    this.getAllPatient();
    this.getAllDiseaseAndRisk1();
  }

  onSubmit2(){
    this.getAllPatient();
  }

  onSubmit3(){
    this.getAllPatient();
    this.listofpatient.listofpatient=this.listpatient;
    this.getAllDiseaseAndRisk();
    
  
  }

  savePatient() {
    this.patientService.createPatient(this.patient).subscribe((response) => {
      this.patientDetails = response;
    });
}
addPatient(){
  this.patientService.addPatient(this.patient).subscribe((response)=>{
    console.log(response);
  });
}

getAllPatient(){
  this.patientService.getAllPatient().subscribe((response)=>{
  this.listpatient=response;
  });
}

getAllDiseaseAndRisk(){
  //const body= JSON.stringify(this.listofpatient);
    //this.listofpatient=JSON.parse(body);
  this.patientService.sendAllPatient(this.listofpatient).subscribe((response)=>{
    this.patientDetails=response;
  })
}

getAllDiseaseAndRisk1(){
  this.patientService.sendOnePatient(this.patient).subscribe((response)=>{
    this.patientDetails=response;
  })
}

}
