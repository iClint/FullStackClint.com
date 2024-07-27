import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { GraphqlService } from '../../../services/graphql.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { AboutStaticContent } from '../../../models/about-static-content.model';
import { StaticContentService } from '../../../services/static-content.service';
import { of } from 'rxjs';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [
        StaticContentService,
        GraphqlService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial values set', () => {
    expect(component.isLoading).toBe(true);
    expect(component.accordionLoading).toBe(false);
    expect(component.errorOccurred).toBe(false);
    expect(component.errorMessage).toBe('');
  });

  it('should load static content on init', async () => {
    const mockContent: AboutStaticContent[] = [
      {
        /* mock data */
      },
    ];
    jest
      .spyOn(StaticContentService, 'fetchStaticContent')
      .mockReturnValue(of(mockContent));

    await component.ngOnInit();
    fixture.detectChanges();

    expect(component.staticContent).toEqual(mockContent);
    expect(component.isLoading).toBe(false);
    expect(component.errorOccurred).toBe(false);
  });
});
