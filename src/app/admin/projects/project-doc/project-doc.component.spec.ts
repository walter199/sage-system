import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDocComponent } from './project-doc.component';

describe('ProjectDocComponent', () => {
  let component: ProjectDocComponent;
  let fixture: ComponentFixture<ProjectDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
