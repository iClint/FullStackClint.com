import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Size, SocialAccountsComponent } from '../../components/social-accounts/social-accounts.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatCardModule,
    SocialAccountsComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  public size = Size.Large;
}
