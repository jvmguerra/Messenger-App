import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivBarComponent } from './div-bar.component';

describe('DivBarComponent', () => {
  let component: DivBarComponent;
  let fixture: ComponentFixture<DivBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
