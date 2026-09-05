import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHome } from './find-home';

describe('FindHome', () => {
  let component: FindHome;
  let fixture: ComponentFixture<FindHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindHome],
    }).compileComponents();

    fixture = TestBed.createComponent(FindHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
