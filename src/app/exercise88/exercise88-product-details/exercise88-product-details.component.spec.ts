import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise88ProductDetailsComponent } from './exercise88-product-details.component';

describe('Exercise88ProductDetailsComponent', () => {
  let component: Exercise88ProductDetailsComponent;
  let fixture: ComponentFixture<Exercise88ProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise88ProductDetailsComponent]
    });
    fixture = TestBed.createComponent(Exercise88ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
