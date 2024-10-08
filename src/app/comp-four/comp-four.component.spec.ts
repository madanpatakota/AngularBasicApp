import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFourComponent } from './comp-four.component';

describe('CompFourComponent', () => {
  let component: CompFourComponent;
  let fixture: ComponentFixture<CompFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
