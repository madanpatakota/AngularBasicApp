import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test-comp/test-comp.component';
import { TestCompTwoComponent } from './test-comp-two/test-comp-two.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestCompTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
