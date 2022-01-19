import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWeaponComponent } from './update-weapon.component';

describe('UpdateWeaponComponent', () => {
  let component: UpdateWeaponComponent;
  let fixture: ComponentFixture<UpdateWeaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWeaponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
