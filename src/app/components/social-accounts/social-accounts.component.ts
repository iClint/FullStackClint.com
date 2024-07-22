import { Component } from '@angular/core';
import {
  MatSlideToggle,
  MatSlideToggleChange,
} from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-social-accounts',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './social-accounts.component.html',
  styleUrl: './social-accounts.component.css',
})
export class SocialAccountsComponent {
  icons = [
    { label: 'GitHub', type: 'brands', icon: 'github', url: '' },
    { label: 'Facebook', type: 'brands', icon: 'facebook', url: '' },
    { label: 'Instagram', type: 'brands', icon: 'instagram', url: '' },
    { label: 'LinkedIn', type: 'brands', icon: 'linkedin', url: '' },
    { label: 'Twitter', type: 'brands', icon: 'twitter', url: '' },
  ];
}
