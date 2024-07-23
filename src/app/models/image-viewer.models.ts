export interface ImageUrls {
  url: string;
  label: string;
  alt: string;
}

export interface ImageViewerStyle {
  viewerStyle: ViewerStyle;
  viewSize: ViewerSize;
  isPreview: boolean;
  soloIndex: number;
  autoNextImg: boolean;
}

export enum ViewerStyle {
  Grid = 'grid',
  Carousel = 'carousel',
  Solo = 'solo',
}

export enum ViewerSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
