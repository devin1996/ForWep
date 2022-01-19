import { TestBed } from '@angular/core/testing';

import { WorldspaceserviceService } from './worldspaceservice.service';

describe('WorldspaceserviceService', () => {
  let service: WorldspaceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldspaceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
