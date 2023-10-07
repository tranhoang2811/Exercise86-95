import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise92Component } from './exercise92.component';

describe('Exercise92Component', () => {
  let component: Exercise92Component;
  let fixture: ComponentFixture<Exercise92Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise92Component]
    });
    fixture = TestBed.createComponent(Exercise92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
