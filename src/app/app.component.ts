import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { SocialAccountsComponent } from './components/social-accounts/social-accounts.component';
import { StaticContentService } from './services/static-content.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SocialAccountsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private staticContentService: StaticContentService) {}

  ngOnInit() {
    this.staticContentService.fetchStaticContent();
  }
}
