import { TestBed } from '@angular/core/testing';

import { MyprojectService } from './myproject.service';

describe('MyprojectService', () => {
  let service: MyprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
