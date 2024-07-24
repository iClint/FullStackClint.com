import { Injectable } from '@angular/core';
import { GraphqlService } from './graphql.service';
import { map, catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaticContentService {
  staticContent: any;
  isContentLoaded = false;
  constructor(private graphqlService: GraphqlService) {}

  fetchStaticContent(): Observable<any> {
    if (this.isContentLoaded) {
      return of(this.staticContent);
    } else {
      const query = `
       query {
        allAboutDocuments(collectionName: "about") {
          content
          imgUrls
          tabLabel
          expansionPanels {
            expanded
            paragraphs
            title
            imgUrls {
              url
              label
            }
          }
        }
      }
    `;

      return this.graphqlService.sendQuery(query).pipe(
        map((data) => {
          this.staticContent = data.allAboutDocuments;
          this.isContentLoaded = true;
          console.log('Fetched data:', this.staticContent);
          return this.staticContent;
        }),
        catchError((error) => {
          return throwError(
            () =>
              new Error(
                'Error connecting to the API to retreive page content from database.',
                error,
              ),
          );
        }),
      );
    }
  }

  public getStaticContent(): any {
    return this.staticContent;
  }
}