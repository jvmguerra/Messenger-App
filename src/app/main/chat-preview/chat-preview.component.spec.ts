import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPreviewComponent } from './chat-preview.component';

describe('ChatPreviewComponent', () => {
  let component: ChatPreviewComponent;
  let fixture: ComponentFixture<ChatPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
