import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLottieComponent } from './dynamic-lottie.component';

describe('DynamicLottieComponent', () => {
  let component: DynamicLottieComponent;
  let fixture: ComponentFixture<DynamicLottieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicLottieComponent]
    });
    fixture = TestBed.createComponent(DynamicLottieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
