export interface ImageUrls {
  url: string;
  label: string;
  alt: string;
}

export interface ImageViewerStyle {
  viewerStyle: string;
  viewerSize: string | undefined;
  isPreview: boolean;
  soloIndex: number;
  carouselConfig: CarouselConfig;
}

export interface CarouselConfig {
  interval: number;
  showNavigationArrows: boolean;
  showNavigationIndicators: boolean;
  pauseOnFocus: boolean;
  pauseOnHover: boolean;
}

export enum ViewerStyle {
  Solo = 'solo',
  Grid = 'grid',
  Carousel = 'carousel',
}

export enum ViewerSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
