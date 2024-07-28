import { TestBed } from '@angular/core/testing';

import { GraphqlService } from './graphql.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { mockAboutStaticContent } from '../../test/mock-about-static-content.fixture';
import { AboutStaticContentQuery } from './static-content.querys';
import { TimeoutError } from 'rxjs';

const mockData = { data: mockAboutStaticContent };
const query = AboutStaticContentQuery;

describe('GraphqlService', () => {
  let service: GraphqlService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        GraphqlService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(GraphqlService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data on a successful response', (done) => {
    service.sendQuery(query).subscribe((data) => {
      expect(data).toEqual(mockData.data);
      done();
    }, done.fail);

    const request = httpTestingController.expectOne(service['graphqlEndpoint']);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({
      query: query,
      variables: undefined,
    });
    request.flush(mockData);
  });

  it('should throw an error on a failed response', (done) => {
    service.sendQuery(query).subscribe(
      () => done.fail('Expected an error to be thrown'),
      (error) => {
        expect(error).toBeTruthy();
        done();
      },
    );

    const request = httpTestingController.expectOne(service['graphqlEndpoint']);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({
      query: query,
      variables: undefined,
    });
    request.error(new ProgressEvent('Network Error'));
  });

  it('shoutld throw http error', () => {
    const mockHttpError = { status: 500, statusText: 'Server Error' };

    service.sendQuery(query).subscribe({
      error: (error) => {
        expect(error.message).toBe('HTTP Error: Server Error');
      },
    });

    const req = httpTestingController.expectOne(service['graphqlEndpoint']);
    req.flush(null, mockHttpError);
  });

   it('should throw timeout error', () => {

     service.sendQuery(query, undefined, 1000).subscribe({
       error: (error) => {
         expect(error).toBeInstanceOf(TimeoutError);
       },
     });

     const req = httpTestingController.expectOne(service['graphqlEndpoint']);
     req.error(new ErrorEvent('TimeoutError'), { status: 408 });
   });

  it('should use default timeout if no timeoutDuration is provided', () => {
    const query = '{ someQuery }';
    const expectedTimeout = service['defaultTimeout'];

    service.sendQuery(query).subscribe({
      error: (error) => {
        expect(error).toBeInstanceOf(TimeoutError);
      },
    });

    const req = httpTestingController.expectOne(service['graphqlEndpoint']);
    req.error(new ErrorEvent('TimeoutError'), { status: 408 });
  });

  it('should use custom timeout if timeoutDuration is provided', () => {
    const customTimeout = 3000;

    service.sendQuery(query, undefined, customTimeout).subscribe({
      error: (error) => {
        expect(error).toBeInstanceOf(TimeoutError);
      },
    });

    const req = httpTestingController.expectOne(service['graphqlEndpoint']);
    req.error(new ErrorEvent('TimeoutError'), { status: 408 });
  });
});
