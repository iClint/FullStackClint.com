import { Component, Input } from '@angular/core';
import {
  ImageUrls,
  ImageViewerStyle,
  ViewerSize,
  ViewerStyle,
} from '../../models/image-viewer.models';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [CommonModule, MatDialogModule, SlickCarouselModule, MatCardModule],
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.css',
})
export class ImageViewerComponent {
  @Input() imageUrls: ImageUrls[] = [];
  @Input() viewerStyle: ImageViewerStyle = {
    viewerStyle: ViewerStyle.Solo,
    viewSize: ViewerSize.Large,
    isPreview: false,
    soloIndex: 0,
    autoNextImg: false,
  };

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    // centerMode: true,
    // centerPadding: '60px',
    // dotsClass: 'slick-dots',
    // draggable: true,
    // cssEase: 'ease',
    // fade: false,
  };

  constructor(private dialog: MatDialog) {}

  get isSolo(): boolean {
    return this.viewerStyle.viewerStyle === ViewerStyle.Solo;
  }

  get isGrid(): boolean {
    return this.viewerStyle.viewerStyle === ViewerStyle.Grid;
  }

  get isCarousel(): boolean {
    return this.viewerStyle.viewerStyle === ViewerStyle.Carousel;
  }

  slickInit() {
    console.log('slick initialized');
  }

  breakpoint() {
    console.log('breakpoint');
  }

  afterChange() {
    console.log('afterChange');
  }

  beforeChange() {
    console.log('beforeChange');
  }

  openModal(imageUrl: ImageUrls): void {
    this.dialog.open(ModalComponent, {
      data: { imageUrl },
    });
  }
}
