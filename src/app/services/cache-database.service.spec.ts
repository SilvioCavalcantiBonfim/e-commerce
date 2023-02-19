import { TestBed } from '@angular/core/testing';

import { CacheDatabaseService } from './cache-database.service';

describe('CacheDatabaseService', () => {
  let service: CacheDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
