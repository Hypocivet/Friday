import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloComponent } from './relo.component';

describe('ReloComponent', () => {
  let component: ReloComponent;
  let fixture: ComponentFixture<ReloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
