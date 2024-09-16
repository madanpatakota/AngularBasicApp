import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrl: './comp-one.component.css'
})
export class CompOneComponent {

    students = "Likitha and Sumitra";
  
  
    getStudents() {
      return "Likitha and Sumitra";
    }
  
  
    technologies = "Angular,Javascript,Typescript,html";
  
  
  
    controlType = "radio";
  
  
    // Event binding
  
    //method , event , action
  
  
    btnClick() {
      //console.log("Trigger");
  
      var a = 10;
      var b = 20;
  
      var c = a + b;
      console.log(c);
    }
  
    textKeyUP() {
      console.log("Key up pressed");
    }
  
  
    textFindKey(event:KeyboardEvent){
        //console.log(event);
        var input = event.target as HTMLInputElement;
        console.log(input.value);
    }
  
  
    paragraphmouseover(event:MouseEvent){
      var paragraph = event.target as HTMLParagraphElement;
  
      paragraph.style.backgroundColor = "green";
    }
  
    paragraphmouseleave(event:MouseEvent){
      var paragraph = event.target as HTMLParagraphElement;
      
      paragraph.style.backgroundColor = "yellow";
    }
  
  
  }
  

