import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoProgComponent } from './logo-prog.component';

describe('LogoProgComponent', () => {
  let component: LogoProgComponent;
  let fixture: ComponentFixture<LogoProgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoProgComponent]
    });
    fixture = TestBed.createComponent(LogoProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
