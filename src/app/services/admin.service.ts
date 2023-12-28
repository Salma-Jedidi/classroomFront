import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/Event';
import { SchoolClass } from '../models/SchoolClass';
import { Subject } from '../models/Subject';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8089/api/v1/auth/adminpage';

  constructor(private http: HttpClient) {}

  addClass(schoolClass: SchoolClass): Observable<SchoolClass> {
    return this.http.post<SchoolClass>(`${this.baseUrl}/addclass`, schoolClass);
  }

  getUsersByRole(role: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/usersByRole/${role}`);
  }

  addAbsenceToUser(userId: number, subjectId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/addAbsence/${userId}`, { subjectId });
  }
  displayUser(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/displayUser/${userId}`);
  }
  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(`${this.baseUrl}/addsubject`, subject);
  }

  affichClass(idClass: number): Observable<SchoolClass> {
    return this.http.get<SchoolClass>(`${this.baseUrl}/affichClass/${idClass}`);
  }
  

  deleteClass(idClass: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteClass/${idClass}`);
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.baseUrl}/addevent`, event);
  }
  affichEvent(idEvent: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/affichEvent/${idEvent}`);
  }

  deleteEvent(idEvent: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteEvent/${idEvent}`);
  }

  affectUtilisateurClasse(idUser: number, idClass: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/affecterUtilisateurClasse/${idUser}/${idClass}`, {});
  }

  affectUtilisateurSubject(idUser: number, idSubject: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/affecterUtilisateurSubject/${idUser}/${idSubject}`, {});
  }

  affectSubjectClass(idSubject: number, idClass: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/affecterSubjectClass/${idSubject}/${idClass}`, {});
  }

  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/updateEvent`, event);
  }

  updateClass(schoolClass: SchoolClass): Observable<SchoolClass> {
    return this.http.put<SchoolClass>(`${this.baseUrl}/updateClass`, schoolClass);
  }

  updateSubject(subject: Subject): Observable<Subject> {
    return this.http.put<Subject>(`${this.baseUrl}/updateSubject`, subject);
  }
  getSubjectDetails(idSubject: number): Observable<Subject> {
    return this.http.get<Subject>(`${this.baseUrl}/${idSubject}/details`);
  }


}
