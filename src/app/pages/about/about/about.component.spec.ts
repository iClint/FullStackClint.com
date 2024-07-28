import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { StaticContentService } from '../../../services/static-content.service';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../../../components/error/error.component';
import { ImageViewerComponent } from '../../../components/image-viewer/image-viewer.component';
import { ChangeDetectorRef } from '@angular/core';
import {
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import {  HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { mockAboutStaticContent } from '../../../../test/mock-about-static-content.fixture';
import { of, throwError } from 'rxjs';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let staticContentService: StaticContentService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatCardModule,
        MatTabsModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        ErrorComponent,
        ImageViewerComponent,
        AboutComponent,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: StaticContentService,
          useValue: {
            fetchStaticContent: jest.fn(),
          },
        },
        ChangeDetectorRef,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    staticContentService = TestBed.inject(StaticContentService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set loading state to false and populate staticContent on successful fetch', () => {
    const mockData = mockAboutStaticContent;
    jest
      .spyOn(staticContentService, 'fetchStaticContent')
      .mockReturnValue(of(mockData));
    fixture.detectChanges();

    expect(component.isLoading).toBe(false);
    expect(component.staticContent).toEqual(mockData);
  });

  it('should handle error and set error state on failed fetch', async () => {
    const errorResponse = new HttpErrorResponse({
      error: 'Http failure response for (unknown url): 500 undefined',
      status: 500,
    });

    jest
      .spyOn(staticContentService, 'fetchStaticContent')
      .mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges(); // Trigger initial change detection

    expect(component.isLoading).toBe(false);
    expect(component.errorOccurred).toBe(true);
    expect(component.errorMessage).toBe(
      'Http failure response for (unknown url): 500 undefined',
    );
  });
});
