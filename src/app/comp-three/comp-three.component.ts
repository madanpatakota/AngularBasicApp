import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrl: './comp-three.component.css'
})
export class CompThreeComponent {

    isAdmin = true;

    btnSubmit(sec:any){
      console.log(sec);
    }


    isValid = false;


    studentNames = ["Likitha" , "Sumitra" , "Madhu"];


    studentsDetails = [
      {"Name" : "LIkitha" , ID : 1},
      {"Name" : "Sumitra" , ID : 2},
      {"Name" : "Madhu"   , ID : 3}
    ];


    studentID = 100;




}
