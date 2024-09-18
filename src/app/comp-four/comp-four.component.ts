import { Component, ContentChild,TemplateRef, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp-four',
  templateUrl: './comp-four.component.html',
  styleUrl: './comp-four.component.css'
})
export class CompFourComponent {

  //  @Viewchild 

 //let                        name      : string

  @ViewChild('technology')  _vTechnology:ElementRef<any>;
  @ViewChild('textbox')  _vtextbox:ElementRef<any>;;

  evtSubmit(){
    console.log(this._vTechnology);
    console.log(this._vTechnology.nativeElement);

    console.log(this._vtextbox);  //elementref
    console.log(this._vtextbox.nativeElement);//nativelement
    console.log(this._vtextbox.nativeElement.value);//value of native element.
    //console.log()

  }

  @ContentChild('BTechnology')  _cbTechnology:ElementRef<any>;
  evContenttSubmit(){

    console.log(this._cbTechnology);  //elementref
    console.log(this._cbTechnology.nativeElement);//nativelement
    //console.log(this._vtextbox.nativeElement.value);//value of native element.
    //console.log()

  }



  @ViewChild("sampletemplate") _tSampleTemplate:TemplateRef<any>;
  templateSubmit(){
     console.log(this._tSampleTemplate); //typeof taht
  }



}
