import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultation } from '../models/consultation.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private apiUrl = '/api'; // This would be configured to point to your MongoDB API

  constructor(private http: HttpClient) { }

  // Record a new game consultation
  recordConsultation(gameName: string): Observable<Consultation> {
    const consultation: Consultation = {
      gameName,
      consultationDate: new Date()
    };
    
    return this.http.post<Consultation>(`${this.apiUrl}/consultations`, consultation);
  }

  // Get all consultations
  getAllConsultations(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${this.apiUrl}/consultations`);
  }
}