import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticContentService } from './static-content.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { GraphqlService } from './graphql.service';
import { mockAboutStaticContent } from '../../test/mock-about-static-content.fixture';
import { AboutStaticContent } from '../models/about-static-content.model';
import { of, throwError } from 'rxjs';
import { AboutStaticContentQuery } from './static-content.querys';

describe('StaticContentService', () => {
  let service: StaticContentService;
  let graphqlService: jest.Mocked<GraphqlService>;

  beforeEach(() => {
    graphqlService = {
      sendQuery: jest.fn(),
    } as unknown as jest.Mocked<GraphqlService>;

    TestBed.configureTestingModule({
      providers: [
        StaticContentService,
        { provide: GraphqlService, useValue: graphqlService },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(StaticContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('fetchStaticContent', () => {
    it('should return static content when content is already loaded', (done) => {
      const mockContent: AboutStaticContent[] = mockAboutStaticContent;
      service['isContentLoaded'] = true;
      service['staticContentSubject'].next(mockContent);

      service.fetchStaticContent().subscribe((content) => {
        expect(content).toEqual(mockContent);
        done();
      });
    });

    it('should call sendQuery and return static content when content is not loaded', (done) => {
      const mockContent: AboutStaticContent[] = mockAboutStaticContent;
      graphqlService.sendQuery.mockReturnValue(
        of({ allAboutDocuments: mockContent }),
      );

      service.fetchStaticContent().subscribe((content) => {
        expect(content).toEqual(mockContent);
        expect(graphqlService.sendQuery).toHaveBeenCalledWith(
          AboutStaticContentQuery,
        );
        done();
      });
    });

    it('should handle errors from sendQuery', (done) => {
      graphqlService.sendQuery.mockReturnValue(
        throwError(() => new Error('Error connecting to the API.')),
      );

      service.fetchStaticContent().subscribe({
        next: () => {
          fail('Expected an error, but got content.');
          done();
        },
        error: (error) => {
          expect(error.message).toContain('Error connecting to the API.');
          done();
        },
      });
    });

    it('should throw an error if content is loaded but is null', (done) => {
      service['isContentLoaded'] = true;
      service['staticContentSubject'].next(null);

      service.fetchStaticContent().subscribe({
        next: () => {
          fail('Expected an error, but got content.');
        },
        error: (error) => {
          expect(error.message).toContain('Content is loaded but is null');
          done();
        },
      });
    });
  });
});
