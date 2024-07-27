import { TestBed } from '@angular/core/testing';

import { StaticContentService } from './static-content.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('StaticContentService', () => {
  let service: StaticContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        StaticContentService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(StaticContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
