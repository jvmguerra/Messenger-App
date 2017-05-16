import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInfoBarComponent } from './chat-info-bar.component';

describe('ChatInfoBarComponent', () => {
  let component: ChatInfoBarComponent;
  let fixture: ComponentFixture<ChatInfoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatInfoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
