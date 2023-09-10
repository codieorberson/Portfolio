import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingWordsComponent } from './moving-words.component';

describe('MovingWordsComponent', () => {
  let component: MovingWordsComponent;
  let fixture: ComponentFixture<MovingWordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovingWordsComponent]
    });
    fixture = TestBed.createComponent(MovingWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
