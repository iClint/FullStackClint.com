import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { AccordionComponent } from '../../../components/accordion/accordion.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StaticContentService } from '../../../services/static-content.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AboutStaticContent } from '../../../models/about-static-content.model';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ErrorComponent } from '../../../components/error/error.component';
import { ImageViewerComponent } from '../../../components/image-viewer/image-viewer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatCardModule,
    MatTabsModule,
    AccordionComponent,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatProgressSpinnerModule,
    MatTooltipModule,
    CommonModule,
    ErrorComponent,
    ImageViewerComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  private subscription: Subscription | null = null;
  staticContent: AboutStaticContent[] = [];
  isLoading = true;
  accordionLoading = true;
  errorOccurred = false;
  errorMessage: string = '';

  constructor(
    private staticContentService: StaticContentService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit() {
    this.accordionLoading = false; // Hide accordion loading
    this.cdr.detectChanges(); // Trigger change detection
  }

  ngOnInit(): void {
    this.subscription = this.staticContentService
      .fetchStaticContent()
      .subscribe(
        (data) => {
          this.staticContent = data;
          this.isLoading = false;
        },
        (error: HttpErrorResponse) => {
          this.isLoading = false;
          this.errorOccurred = true;
          this.errorMessage = error.message || 'An error occurred';
          console.error('Error fetching static content:', this.errorMessage);
        },
      );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
