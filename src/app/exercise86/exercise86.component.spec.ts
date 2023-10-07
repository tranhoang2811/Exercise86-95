import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise86Component } from './exercise86.component';

describe('Exercise86Component', () => {
  let component: Exercise86Component;
  let fixture: ComponentFixture<Exercise86Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise86Component]
    });
    fixture = TestBed.createComponent(Exercise86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
