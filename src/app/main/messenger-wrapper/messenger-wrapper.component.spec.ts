import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerWrapperComponent } from './messenger-wrapper.component';

describe('MessengerWrapperComponent', () => {
  let component: MessengerWrapperComponent;
  let fixture: ComponentFixture<MessengerWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengerWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
