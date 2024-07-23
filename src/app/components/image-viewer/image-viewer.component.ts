import { Component, Input } from '@angular/core';
import {
  ImageUrls,
  ImageViewerStyle,
  ViewerSize,
  ViewerStyle,
} from '../../models/image-viewer.models';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.css',
})
export class ImageViewerComponent {
  @Input() imageUrls: ImageUrls[] = [];
  @Input() viewerStyle: ImageViewerStyle = {
    viewerStyle: ViewerStyle.Solo,
    viewSize: ViewerSize.Small,
    isPreview: false,
    soloIndex: 0,
    autoNextImg: false,
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

  openModal(imageUrl: ImageUrls): void {
    this.dialog.open(ModalComponent, {
      data: { imageUrl },
    });
  }
}
