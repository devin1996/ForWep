import { TestBed } from '@angular/core/testing';

import { WeaponserviceService } from './weaponservice.service';

describe('WeaponserviceService', () => {
  let service: WeaponserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
