import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Patient } from '../common/patient';
import { PatientListComponent } from '../components/patient-list/patient-list.component';
import { ListofPatient } from '../common/listof-patient';

export class Disease {
  disease?: string[];
  id?: number;
  risk?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private baseurl = 'http://localhost:8080/patient/1';
  private baseurl2 = 'http://localhost:8080/perpatient';
  private baseurl3 = 'http://localhost:8080/addpatient';
  private baseurl4 = 'http://localhost:8080/getpatient';
  private baseurl5 = "http://localhost:8080/patient";
  constructor(private httpClient: HttpClient) {}
  getPatientList(): Observable<Patient[]> {
    return this.httpClient
      .get<GetResponse>(this.baseurl)
      .pipe(map((response) => response.listofpatient));
  }
  createPatient(patient: Patient): Observable<Disease[]> {
    return this.httpClient.post<Disease[]>(`${this.baseurl2}`, patient);
  }

  addPatient(patient:Patient): Observable<Object> {
    return this.httpClient.post(`${this.baseurl3}`, patient);
  }

  getAllPatient(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseurl4}`);
  }

  sendAllPatient(listOfPatient:ListofPatient): Observable<Disease[]>{
    const headers= {'content-type':'application/json'};
    return this.httpClient.post<Disease[]>(`${this.baseurl5}`, listOfPatient,
   );
  }
}
interface GetResponse {
  listofpatient: Patient[];
}

interface GetDisease {
  disease: string[];
}
