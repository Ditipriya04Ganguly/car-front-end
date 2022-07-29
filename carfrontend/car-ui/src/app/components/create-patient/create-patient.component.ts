import { Component, OnInit } from '@angular/core';
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

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.savePatient();
  }

  savePatient() {
    this.patientService.createPatient(this.patient).subscribe((response) => {
      this.patientDetails = response;
    });
  }
}
