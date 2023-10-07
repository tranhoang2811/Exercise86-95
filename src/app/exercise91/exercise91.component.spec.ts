import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise91Component } from './exercise91.component';

describe('Exercise91Component', () => {
  let component: Exercise91Component;
  let fixture: ComponentFixture<Exercise91Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise91Component]
    });
    fixture = TestBed.createComponent(Exercise91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
