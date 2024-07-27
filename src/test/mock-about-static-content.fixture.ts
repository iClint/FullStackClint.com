import { AboutStaticContent } from '../app/models/about-static-content.model';
import {
  ImageUrls,
  ImageViewerStyle,
  CarouselConfig,
} from '../app/models/image-viewer.models';

const mockCarouselConfig: CarouselConfig = {
  interval: 5000,
  showNavigationArrows: true,
  showNavigationIndicators: true,
  pauseOnFocus: true,
  pauseOnHover: true,
};

const mockImageViewerStyle: ImageViewerStyle = {
  viewerStyle: 'default',
  viewerSize: 'large',
  isPreview: true,
  soloIndex: 1,
  carouselConfig: mockCarouselConfig,
};

const mockImageUrls: ImageUrls[] = [
  {
    url: 'https://example.com/image1.jpg',
    label: 'Image 1',
    alt: 'Description of Image 1',
  },
  {
    url: 'https://example.com/image2.jpg',
    label: 'Image 2',
    alt: 'Description of Image 2',
  },
  {
    url: 'https://example.com/image3.jpg',
    label: 'Image 3',
    alt: 'Description of Image 3',
  },
];

export const mockAboutStaticContent: AboutStaticContent[] = [{
  tabLabel: 'About Us',
  content: [
    'This is some introductory content about us.',
    'Here is more information on what we do.',
  ],
  imgUrls: mockImageUrls,
  imageViewerStyles: mockImageViewerStyle,
  expansionPanels: [
    {
      expanded: true,
      title: 'Panel 1',
      paragraphs: [
        'This is the first paragraph of panel 1.',
        'This is the second paragraph of panel 1.',
      ],
      imgUrls: mockImageUrls,
      imageViewerStyles: mockImageViewerStyle,
    },
    {
      expanded: false,
      title: 'Panel 2',
      paragraphs: [
        'This is the first paragraph of panel 2.',
        'This is the second paragraph of panel 2.',
      ],
      imgUrls: mockImageUrls,
      imageViewerStyles: mockImageViewerStyle,
    },
  ],
}];

