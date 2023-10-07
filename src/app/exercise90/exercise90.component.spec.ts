import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise90Component } from './exercise90.component';

describe('Exercise90Component', () => {
  let component: Exercise90Component;
  let fixture: ComponentFixture<Exercise90Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise90Component]
    });
    fixture = TestBed.createComponent(Exercise90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
