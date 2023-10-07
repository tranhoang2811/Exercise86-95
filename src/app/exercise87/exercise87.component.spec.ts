import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise87Component } from './exercise87.component';

describe('Exercise87Component', () => {
  let component: Exercise87Component;
  let fixture: ComponentFixture<Exercise87Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise87Component]
    });
    fixture = TestBed.createComponent(Exercise87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
