import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideProjectsComponent } from './side-projects.component';

describe('SideProjectsComponent', () => {
  let component: SideProjectsComponent;
  let fixture: ComponentFixture<SideProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideProjectsComponent]
    });
    fixture = TestBed.createComponent(SideProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
