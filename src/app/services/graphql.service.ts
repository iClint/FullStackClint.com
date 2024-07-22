import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  map,
  Observable,
  throwError,
  timeout,
  TimeoutError,
} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  //TODO: Update the graphqlEndpoint to the correct URL and store in envirment variable
  private graphqlEndpoint = environment.graphqlEndpoint;

  private defaultTimeout = 5200; // Default timeout in milliseconds (adjust as needed)

  constructor(private http: HttpClient) {}

  public sendQuery(
    query: string,
    variables?: any,
    timeoutDuration: number = this.defaultTimeout,
  ): Observable<any> {
    const body = {
      query: query,
      variables: variables,
    };

    return this.http.post<any>(this.graphqlEndpoint, body).pipe(
      timeout(timeoutDuration), // Timeout for the HTTP request
      map((res) => {
        if (res.errors) {
          throw new Error(`GraphQL Error: ${res.errors[0].message}`);
        }
        return res.data;
      }),
      catchError((error: any) => {
        if (error instanceof TimeoutError) {
          return throwError(() => new Error('GraphQL request timed out'));
        } else if (error instanceof HttpErrorResponse) {
          return throwError(() => new Error(`HTTP Error: ${error.message}`));
        } else {
          return throwError(() => error);
        }
      }),
    );
  }
}
