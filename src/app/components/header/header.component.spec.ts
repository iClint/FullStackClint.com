import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, HeaderComponent],
      providers: [{ provide: ActivatedRoute, useValue: '' }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should display the site heading and subheading', () => {
     const headingElement = fixture.debugElement.query(
       By.css('h1'),
     ).nativeElement;
     const subheadingElement = fixture.debugElement.query(
       By.css('p'),
     ).nativeElement;

     expect(headingElement.textContent).toBe('FullStackClint.com');
     expect(subheadingElement.textContent).toBe(
       'My Journey in Full-Stack Development',
     );
   });

   it('should render app-social-accounts component', () => {
     const socialAccountsElement = fixture.debugElement.query(
       By.css('app-social-accounts'),
     );

     expect(socialAccountsElement).toBeTruthy();
   });

   it('should render app-navigation component', () => {
     const navigationElement = fixture.debugElement.query(
       By.css('app-navigation'),
     );

     expect(navigationElement).toBeTruthy();
   });
});
