import { Component } from '@angular/core';

//madan@gmail.com
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {


students = "Likitha and Sumitra";


getStudents(){
   return "Likitha and Sumitra";
}


technologies = "Angular,Javascript,Typescript,html";



controlType = "radio";


    



  
}
