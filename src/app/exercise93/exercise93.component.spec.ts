import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise93Component } from './exercise93.component';

describe('Exercise93Component', () => {
  let component: Exercise93Component;
  let fixture: ComponentFixture<Exercise93Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise93Component]
    });
    fixture = TestBed.createComponent(Exercise93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
