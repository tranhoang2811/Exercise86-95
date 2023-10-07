import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise89CategoryListComponent } from './exercise89-category-list.component';

describe('Exercise89CategoryListComponent', () => {
  let component: Exercise89CategoryListComponent;
  let fixture: ComponentFixture<Exercise89CategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise89CategoryListComponent]
    });
    fixture = TestBed.createComponent(Exercise89CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
