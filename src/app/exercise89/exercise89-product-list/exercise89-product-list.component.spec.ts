import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise89ProductListComponent } from './exercise89-product-list.component';

describe('Exercise89ProductListComponent', () => {
  let component: Exercise89ProductListComponent;
  let fixture: ComponentFixture<Exercise89ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise89ProductListComponent]
    });
    fixture = TestBed.createComponent(Exercise89ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
