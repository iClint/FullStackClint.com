import { Component } from '@angular/core';
import { SocialAccountsComponent } from '../../social-accounts/social-accounts.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SocialAccountsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  siteHeading = 'FullStackClint.com';
  siteSubheading = 'My Journey in Full-Stack Development';
}
