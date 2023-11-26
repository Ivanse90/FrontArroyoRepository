import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArroyoAreaComponent } from './arroyo-area.component';

describe('ArroyoAreaComponent', () => {
  let component: ArroyoAreaComponent;
  let fixture: ComponentFixture<ArroyoAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArroyoAreaComponent]
    });
    fixture = TestBed.createComponent(ArroyoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
