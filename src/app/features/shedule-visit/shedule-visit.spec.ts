import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleVisit } from './shedule-visit';

describe('SheduleVisit', () => {
  let component: SheduleVisit;
  let fixture: ComponentFixture<SheduleVisit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheduleVisit],
    }).compileComponents();

    fixture = TestBed.createComponent(SheduleVisit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
