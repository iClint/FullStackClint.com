import { Injectable } from '@angular/core';
import { GraphqlService } from './graphql.service';
import {
  map,
  catchError,
  Observable,
  of,
  throwError,
  BehaviorSubject,
} from 'rxjs';
import { AboutStaticContent } from '../models/about-static-content.model';
import { AboutStaticContentQuery } from './static-content.querys';

@Injectable({
  providedIn: 'root',
})
export class StaticContentService {
  private staticContentSubject = new BehaviorSubject<
    AboutStaticContent[] | null
  >(null);
  private isContentLoaded = false;

  constructor(private graphqlService: GraphqlService) {}

  fetchStaticContent(): Observable<AboutStaticContent[]> {
    if (this.isContentLoaded) {
      const content = this.staticContentSubject.getValue();
      if (content) {
        return of(content);
      } else {
        return throwError(() => new Error('Content is loaded but is null'));
      }
    } else {
      const query = AboutStaticContentQuery;

      return this.graphqlService.sendQuery(query).pipe(
        map((data: { allAboutDocuments: AboutStaticContent[] }) => {
          const staticContent = data.allAboutDocuments;
          this.staticContentSubject.next(staticContent);
          this.isContentLoaded = true;
          return staticContent;
        }),
        catchError((error) => {
          return throwError(() => new Error('Error connecting to the API.'));
        }),
      );
    }
  }
}
