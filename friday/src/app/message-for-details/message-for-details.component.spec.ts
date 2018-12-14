import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageForDetailsComponent } from './message-for-details.component';

describe('MessageForDetailsComponent', () => {
  let component: MessageForDetailsComponent;
  let fixture: ComponentFixture<MessageForDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageForDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageForDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
