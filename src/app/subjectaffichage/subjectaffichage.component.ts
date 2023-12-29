import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Subject } from '../models/Subject';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-subjectaffichage',
  templateUrl: './subjectaffichage.component.html',
  styleUrls: ['./subjectaffichage.component.css']
})
export class SubjectaffichageComponent {
  getEventForm: FormGroup;
  getClassForm: FormGroup;
  getSubjectForm: FormGroup;

  getEventId: number = 0;
  getClassId: number = 0;
  idSubject: number = 1; // ID du sujet à récupérer
  retrievedEvent: Event | null = null;

  subjectDetails: any; // You should create a model based on the structure of the response

  selectedAction: string = 'getEvent'; // Default action
  result: any; // Variable to store the result
 
  constructor(private adminService: AdminService, private fb: FormBuilder) {
    this.getEventForm = this.fb.group({
      // Define form controls for Get Event action
    });

    this.getClassForm = this.fb.group({
      // Define form controls for Get Class action
    });

    this.getSubjectForm = this.fb.group({
      // Define form controls for Get Subject action
    });
  }

  userId: string = ''; // Assume user ID is a string, modify as needed
  subjectId: string = ''; // Assume subject ID is a string, modify as needed


  // ...

  getSubjectDetails() {
    this.adminService.getSubjectDetails(this.userId, this.subjectId).subscribe(
      (data) => {
        if (data !== null) {
          this.subjectDetails = data;
          console.log('Subject details:', this.subjectDetails);
        } else {
          console.warn('Subject not found');
          // Handle the case where the subject is not found
        }
      },
      (error) => {
        console.error('Error fetching subject details:', error);
      }
    );
  }
  
}
