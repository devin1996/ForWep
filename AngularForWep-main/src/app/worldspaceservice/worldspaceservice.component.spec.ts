import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldspaceserviceComponent } from './worldspaceservice.component';

describe('WorldspaceserviceComponent', () => {
  let component: WorldspaceserviceComponent;
  let fixture: ComponentFixture<WorldspaceserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldspaceserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldspaceserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
