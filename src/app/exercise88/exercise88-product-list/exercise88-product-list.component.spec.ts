import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise88ProductListComponent } from './exercise88-product-list.component';

describe('Exercise88ProductListComponent', () => {
  let component: Exercise88ProductListComponent;
  let fixture: ComponentFixture<Exercise88ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise88ProductListComponent]
    });
    fixture = TestBed.createComponent(Exercise88ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
