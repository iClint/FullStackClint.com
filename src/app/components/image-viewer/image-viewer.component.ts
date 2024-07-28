import { Component, Input } from '@angular/core';
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
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    NgbCarouselModule,
    MatCardModule,
    MatTooltipModule,
  ],
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.css',
})
export class ImageViewerComponent {
  @Input() imageUrls: ImageUrls[] = [];
  @Input() viewerStyle: ImageViewerStyle = {} as ImageViewerStyle;

  constructor(private dialog: MatDialog) {}

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

  openModal(imageUrls: ImageUrls[], index: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { imageUrls: imageUrls, index: index },
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
