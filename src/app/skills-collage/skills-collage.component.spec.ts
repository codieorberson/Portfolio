import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCollageComponent } from './skills-collage.component';

describe('SkillsCollageComponent', () => {
  let component: SkillsCollageComponent;
  let fixture: ComponentFixture<SkillsCollageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsCollageComponent]
    });
    fixture = TestBed.createComponent(SkillsCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
