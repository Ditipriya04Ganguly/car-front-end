import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/common/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients!:Patient[];
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.listPatients();
  }

  listPatients(){
    this.patientService.getPatientList().subscribe((data)=>this.patients=data);
  }

}
