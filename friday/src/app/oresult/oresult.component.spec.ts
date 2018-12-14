import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OresultComponent } from './oresult.component';

describe('OresultComponent', () => {
  let component: OresultComponent;
  let fixture: ComponentFixture<OresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
