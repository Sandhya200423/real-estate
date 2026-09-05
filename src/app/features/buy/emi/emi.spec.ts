import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emi } from './emi';

describe('Emi', () => {
  let component: Emi;
  let fixture: ComponentFixture<Emi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emi],
    }).compileComponents();

    fixture = TestBed.createComponent(Emi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
