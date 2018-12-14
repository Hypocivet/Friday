import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouxianComponent } from './youxian.component';

describe('YouxianComponent', () => {
  let component: YouxianComponent;
  let fixture: ComponentFixture<YouxianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouxianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouxianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
