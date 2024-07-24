export interface AboutStaticContent {
  tabLabel: string;
  content: string[];
  imgUrls: ImgUrl[];
  expansionPanels: ExpansionPanelModel[];
}

export interface ExpansionPanelModel {
  title: string;
  description: string;
  paragraphs: string[];
  imgUrls: ImgUrl[];
  expanded: boolean;
}

export interface ImgUrl {
  url: string;
  label: string;
  alt: string;
}
