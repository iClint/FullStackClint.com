import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-social-accounts',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './social-accounts.component.html',
  styleUrl: './social-accounts.component.css',
})

export class SocialAccountsComponent {
  @Input() size: Size = Size.Medium;

  icons = [
    { label: 'GitHub', type: 'brands', icon: 'github', url: '' },
    { label: 'Facebook', type: 'brands', icon: 'facebook', url: '' },
    { label: 'Instagram', type: 'brands', icon: 'instagram', url: '' },
    { label: 'LinkedIn', type: 'brands', icon: 'linkedin', url: '' },
    { label: 'Twitter', type: 'brands', icon: 'twitter', url: '' },
  ];
}

export enum Size {
 Small = 'small',
 Medium = 'medium',
 Large = 'large'
}
