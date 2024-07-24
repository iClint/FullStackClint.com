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

  get tempImageViewer() {
    return {
      imageUrls: [
        {
          url: 'https://fullstackclint.com/hosted-images/html5.png',
          label: 'HTML5',
          alt: 'HTML5',
        },
        {
          url: 'http://fullstackclint.com/hosted-images/css3.png',
          label: 'Image 2',
          alt: 'Image 2',
        },
        {
          url: 'http://fullstackclint.com/hosted-images/angular.png',
          label: 'Angular',
          alt: 'Angular',
        },
      ],
      viewerStyle: {
        viewerStyle: ViewerStyle.Carousel,
        viewSize: ViewerSize.Medium,
        isPreview: true,
        soloIndex: 0,
        autoNextImg: false,
      },
    };
  }
}
