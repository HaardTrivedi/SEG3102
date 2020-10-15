import { TestBed } from '@angular/core/testing';

import { InfoDbService } from './info-db.service';

describe('InfoDbService', () => {
  let service: InfoDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
