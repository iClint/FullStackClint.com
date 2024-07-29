import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ImageUrls } from '../../../models/image-viewer.models';
import { MatCard } from '@angular/material/card';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatCard,
    NgbCarouselModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  loading = true;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { imageUrls: ImageUrls[]; index: number },
    public dialogRef: MatDialogRef<ModalComponent>,
  ) {}

  get isCarousel(): boolean {
    return this.data?.imageUrls?.length > 1;
  }

  nextImage() {
    // Move to the next image, wrap around if at the end
    this.data.index = (this.data.index + 1) % this.data.imageUrls.length;
  }

  prevImage() {
    // Move to the previous image, wrap around if at the beginning
    this.data.index =
      (this.data.index - 1 + this.data.imageUrls.length) %
      this.data.imageUrls.length;
  }

  closeModal() {
    this.dialogRef.close();
    this.loading = true;
  }

  imageLoaded() {
    this.loading = false;
  }

  imageChanged() {
    this.loading = true;
  }
}
