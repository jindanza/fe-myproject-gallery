import { TestBed } from '@angular/core/testing';

import { MyprojecteditService } from './myprojectedit.service';

describe('MyprojecteditService', () => {
  let service: MyprojecteditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyprojecteditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
