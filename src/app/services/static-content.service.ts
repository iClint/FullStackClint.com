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
      const query = `
      query {
        allAboutDocuments(collectionName: "about") {
          tabLabel
          content
          imgUrls {
            alt
            label
            url
          }
          imageViewerStyles {
            isPreview
            soloIndex
            viewerStyle
            viewerSize
            carouselConfig {
              interval
              pauseOnFocus
              pauseOnHover
              showNavigationArrows
              showNavigationIndicators
            }
          }
          expansionPanels {
            expanded
            paragraphs
            title
            imgUrls {
              label
              url
              alt
            }
            imageViewerStyles {
              isPreview
              soloIndex
              viewerStyle
              viewerSize
              carouselConfig {
                interval
                pauseOnFocus
                pauseOnHover
                showNavigationArrows
                showNavigationIndicators
              }
            }
          }
        }
      }
    `;

      return this.graphqlService.sendQuery(query).pipe(
        map((data: { allAboutDocuments: AboutStaticContent[] }) => {
          const staticContent = data.allAboutDocuments;
          this.staticContentSubject.next(staticContent);
          this.isContentLoaded = true;
          console.log('Fetched data:', staticContent);
          return staticContent;
        }),
        catchError((error) => {
          console.error('Error connecting to the API:', error);
          return throwError(() => new Error('Error connecting to the API.'));
        }),
      );
    }
  }

  public getStaticContent(): Observable<AboutStaticContent[] | null> {
    return this.staticContentSubject.asObservable();
  }
}
