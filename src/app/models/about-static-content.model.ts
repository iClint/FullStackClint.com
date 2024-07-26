import { ImageViewerStyle } from './image-viewer.models';

export interface AboutStaticContent {
  tabLabel: string;
  content: string[];
  imgUrls: ImgUrl[];
  imageViewerStyles: ImageViewerStyle;
  expansionPanels: ExpansionPanelModel[];
}

export interface ExpansionPanelModel {
  expanded: boolean;
  title: string;
  paragraphs: string[];
  imgUrls: ImgUrl[];
  imageViewerStyles: ImageViewerStyle;
}

export interface ImgUrl {
  url: string;
  label: string;
  alt: string;
}
