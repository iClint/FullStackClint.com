import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { AboutComponent } from './pages/about/about/about.component';
import { SocialAccountsComponent } from './components/social-accounts/social-accounts.component';
import { StaticContentService } from './services/static-content.service';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ViewerSize, ViewerStyle } from './models/image-viewer.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    SocialAccountsComponent,
    ImageViewerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private staticContentService: StaticContentService) {}
  ngOnInit() {
    this.staticContentService.fetchStaticContent();
  }

  get tempIMageViewer() {
    return {
      imageUrls: [
        {
          url: 'https://via.placeholder.com/500',
          label: 'Image 1',
          alt: 'Image 1',
        },
        {
          url: 'https://via.placeholder.com/500',
          label: 'Image 2',
          alt: 'Image 2',
        },
        {
          url: 'https://via.placeholder.com/500',
          label: 'Image 3',
          alt: 'Image 3',
        },
      ],
      viewerStyle: {
        viewerStyle: ViewerStyle.Solo,
        viewSize: ViewerSize.Small,
        isPreview: true,
        soloIndex: 0,
        autoNextImg: false,
      },
    };
  }
}
