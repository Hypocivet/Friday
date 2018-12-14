import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OreceiverComponent } from './oreceiver.component';

describe('OreceiverComponent', () => {
  let component: OreceiverComponent;
  let fixture: ComponentFixture<OreceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OreceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OreceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
