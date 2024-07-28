import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewerComponent } from './image-viewer.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  ImageUrls,
  ImageViewerStyle,
  ViewerStyle,
} from '../../models/image-viewer.models';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';

const testUrls: ImageUrls[] = [
  {
    url: 'https://example.com/image1.jpg',
    label: 'Image 1',
    alt: 'Image 1',
  },
  {
    url: 'https://example.com/image2.jpg',
    label: 'Image 2',
    alt: 'Image 2',
  },
];

const testStyle: ImageViewerStyle = {
  viewerStyle: ViewerStyle.Grid,
  viewerSize: 'ViewerSize.small',
  isPreview: true,
  soloIndex: 0,
  carouselConfig: {
    interval: 1000,
    showNavigationArrows: true,
    showNavigationIndicators: true,
    pauseOnFocus: true,
    pauseOnHover: true,
  },
};

describe('ImageViewerComponent', () => {
  let component: ImageViewerComponent;
  let fixture: ComponentFixture<ImageViewerComponent>;
  let dialog: MatDialog;
  let dialogOpenSpy: jest.SpyInstance;

  beforeEach(async () => {
    // Mock MatDialog.open to return a mock dialog reference
    const mockDialogRef = {
      afterClosed: jest.fn().mockReturnValue(of(null)), // Mock `afterClosed` method
    };

    dialogOpenSpy = jest
      .spyOn(MatDialog.prototype, 'open')
      .mockReturnValue(mockDialogRef as any);

    await TestBed.configureTestingModule({
      imports: [
        ImageViewerComponent,
        CommonModule,
        MatDialogModule,
        NgbCarouselModule,
        MatCardModule,
        MatTooltipModule,
      ],
      providers: [{ provide: MatDialog, useValue: { open: jest.fn() } }],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle imageUrls input correctly', () => {
    component.imageUrls = testUrls;
    fixture.detectChanges();

    expect(component.imageUrls).toEqual(testUrls);
  });

  it('should handle viewerStyle input correctly', () => {
    component.viewerStyle = testStyle;
    fixture.detectChanges();

    expect(component.viewerStyle).toEqual(testStyle);
  });

    it('should return true for isSolo when viewerStyle is Solo', () => {
      component.viewerStyle.viewerStyle = ViewerStyle.Solo;
      expect(component.isSolo).toBeTruthy();
    });

    it('should return false for isSolo when viewerStyle is not Solo', () => {
      component.viewerStyle.viewerStyle = ViewerStyle.Carousel;
      expect(component.isSolo).toBeFalsy();
    });

  it('should return true for isGrid when viewerStyle is Grid', () => {
    component.viewerStyle.viewerStyle = ViewerStyle.Grid;
    expect(component.isGrid).toBeTruthy();
  });

  it('should return false for isGrid when viewerStyle is not Grid', () => {
    component.viewerStyle.viewerStyle = ViewerStyle.Carousel;
    expect(component.isGrid).toBeFalsy();
  });

  it('should return true for isCarousel when viewerStyle is Carousel', () => {
    component.viewerStyle.viewerStyle = ViewerStyle.Carousel;
    expect(component.isCarousel).toBeTruthy();
  });

    it('should return false for isCarousel when viewerStyle is not Carousel', () => {
      component.viewerStyle.viewerStyle = ViewerStyle.Grid;
      expect(component.isCarousel).toBeFalsy();
    });

  it('should open dialog with correct data', () => {
    const index = 1;

    component.openModal(testUrls, index);

    expect(dialogOpenSpy).toHaveBeenCalledWith(ModalComponent, {
      data: { imageUrls: testUrls, index: index },
    });
  });
});
