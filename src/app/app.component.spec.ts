import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialAccountsComponent } from './components/social-accounts/social-accounts.component';
import { StaticContentService } from './services/static-content.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { routes } from './app.routes';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        RouterModule.forRoot(routes),
      ],
      providers: [
        {
          provide: StaticContentService,
          useValue: {
            fetchStaticContent: jest.fn(),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the header component and render it', () => {
    const headerFixture = TestBed.createComponent(HeaderComponent);
    const headerComponent = headerFixture.componentInstance;
    expect(headerComponent).toBeTruthy();

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
  });

  it('should create the footer component and render it', () => {
    const footerFixture = TestBed.createComponent(FooterComponent);
    const footerComponent = footerFixture.componentInstance;
    expect(footerComponent).toBeTruthy();

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });
});
