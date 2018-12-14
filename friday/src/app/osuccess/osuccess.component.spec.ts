import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsuccessComponent } from './osuccess.component';

describe('OsuccessComponent', () => {
  let component: OsuccessComponent;
  let fixture: ComponentFixture<OsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
