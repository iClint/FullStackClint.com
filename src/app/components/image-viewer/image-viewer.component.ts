import { Component, Input, OnInit } from '@angular/core';
import {
  ImageUrls,
  ImageViewerStyle,
  ViewerStyle,
} from '../../models/image-viewer.models';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [CommonModule, MatDialogModule, NgbCarouselModule, MatCardModule],
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.css',
})
export class ImageViewerComponent implements OnInit {
  @Input() imageUrls: ImageUrls[] = [];
  @Input() viewerStyle: ImageViewerStyle = {} as ImageViewerStyle;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('IV images = ', this.imageUrls);
    console.log('IV styles = ', this.viewerStyle);
    console.log('IV viewerSize = ', this.viewerStyle.viewerSize);
  }
  get isGrid(): boolean {
    return this.viewerStyle.viewerStyle === ViewerStyle.Grid;
  }

  get isCarousel(): boolean {
    return this.viewerStyle.viewerStyle === ViewerStyle.Carousel;
  }

  get viewerSize(): string {
    return this.viewerStyle.viewerSize
      ? this.viewerStyle.viewerSize.toString()
      : '';
  }

  openModal(imageUrl: ImageUrls): void {
    this.dialog.open(ModalComponent, {
      data: { imageUrl },
    });
  }
}
