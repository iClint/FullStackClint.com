import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAccountsComponent } from './social-accounts.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';

describe('SocialAccountsComponent', () => {
  let component: SocialAccountsComponent;
  let fixture: ComponentFixture<SocialAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialAccountsComponent, MatTooltipModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all social media icons', () => {
    const iconElements = fixture.debugElement.queryAll(
      By.css('.socials-content i'),
    );

    expect(iconElements.length).toBe(component.icons.length);

    component.icons.forEach((icon, index) => {
      const iconElement = iconElements[index].nativeElement;
      expect(iconElement.classList).toContain(`fa-${icon.type}`);
      expect(iconElement.classList).toContain(`fa-${icon.icon}`);
    });
  });
});
