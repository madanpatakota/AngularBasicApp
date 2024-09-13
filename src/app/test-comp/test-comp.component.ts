import { Component } from "@angular/core";

//pipes , components , servics , guards , modules , interceptors , directives
// @gmail.components
// @hotmail.components
// @tcs.com

//component = html + css + ts + spec.tss

//1. Prepare component
//2. Register component
//3. Use component


//Q) how to create .html file for moving the 
//<h1>First my Component</h1>

// @Component({
//     selector : "app-test-comp",
//     template : `<h1>First my Component</h1>`,
//     styles   : [ ` h1 {background-color:red;} ` ]
// })


@Component({
    selector    : "app-test-comp",
    templateUrl : "./test-comp.component.html",
    styleUrl    : "./test-comp.component.css"
})


export class TestComponent{
    //Logic;
}

