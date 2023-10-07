import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise95Component } from './exercise95.component';

describe('Exercise95Component', () => {
  let component: Exercise95Component;
  let fixture: ComponentFixture<Exercise95Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise95Component]
    });
    fixture = TestBed.createComponent(Exercise95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
