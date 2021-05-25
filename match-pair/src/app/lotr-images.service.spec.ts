import { TestBed } from '@angular/core/testing';

import { LotrImagesService } from './lotr-images.service';

describe('LotrImagesService', () => {
  let service: LotrImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotrImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
