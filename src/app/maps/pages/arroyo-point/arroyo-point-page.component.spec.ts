import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArroyoPointPageComponent } from './arroyo-point-page.component';

describe('ArroyoPointPageComponent', () => {
  let component: ArroyoPointPageComponent;
  let fixture: ComponentFixture<ArroyoPointPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArroyoPointPageComponent]
    });
    fixture = TestBed.createComponent(ArroyoPointPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
