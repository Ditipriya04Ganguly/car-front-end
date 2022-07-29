import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Patient } from '../common/patient';

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
  constructor(private httpClient: HttpClient) {}
  getPatientList(): Observable<Patient[]> {
    return this.httpClient
      .get<GetResponse>(this.baseurl)
      .pipe(map((response) => response.listofpatient));
  }
  createPatient(patient: Patient): Observable<Disease[]> {
    return this.httpClient.post<Disease[]>(`${this.baseurl2}`, patient);
  }
}
interface GetResponse {
  listofpatient: Patient[];
}

interface GetDisease {
  disease: string[];
}
