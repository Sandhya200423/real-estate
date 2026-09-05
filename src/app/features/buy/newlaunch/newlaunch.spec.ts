import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newlaunch } from './newlaunch';

describe('Newlaunch', () => {
  let component: Newlaunch;
  let fixture: ComponentFixture<Newlaunch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newlaunch],
    }).compileComponents();

    fixture = TestBed.createComponent(Newlaunch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
