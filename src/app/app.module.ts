import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test-comp/test-comp.component';
import { TestCompTwoComponent } from './test-comp-two/test-comp-two.component';
import { FormsModule } from '@angular/forms';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CompFourComponent } from './comp-four/comp-four.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestCompTwoComponent,
    CompOneComponent,
    CompTwoComponent,
    CompThreeComponent,
    CompFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
