import { TestBed } from '@angular/core/testing';

import { InitializerServiceService } from './initializer-service.service';

describe('InitializerServiceService', () => {
  let service: InitializerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitializerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
