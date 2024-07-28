import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCard } from '@angular/material/card';
import { ImageUrls } from '../../../models/image-viewer.models';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent, MatCard, NgbCarouselModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            imageUrls: [
              {
                url: 'http://example.com/image1.jpg',
                label: 'Image 1',
                alt: 'First Image',
              },
              {
                url: 'http://example.com/image2.jpg',
                label: 'Image 2',
                alt: 'Second Image',
              },
            ] as ImageUrls[],
            index: 0,
          },
        },
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should move to the next image and wrap around', () => {
     component.nextImage();
     expect(component.data.index).toBe(1); // Move to next image
     component.nextImage();
     expect(component.data.index).toBe(0); // Wrap around
   });

   it('should move to the previous image and wrap around', () => {
     component.prevImage();
     expect(component.data.index).toBe(1); // Move to previous image
     component.prevImage();
     expect(component.data.index).toBe(0); // Wrap around
   });
});
