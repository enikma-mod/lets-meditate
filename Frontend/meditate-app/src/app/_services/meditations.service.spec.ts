import { TestBed } from '@angular/core/testing';

import { MeditationsService } from './meditations.service';

describe('MeditationsService', () => {
  let service: MeditationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeditationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
