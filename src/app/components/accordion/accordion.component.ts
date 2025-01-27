import { Component, Input } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { ExpansionPanelModel } from '../../models/about-static-content.model';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatTooltipModule,
    ImageViewerComponent,
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  @Input({ required: true }) accordion!: ExpansionPanelModel[];
  private hint = '... Click to read more';

  panelPreview(content: string, maxWords: number = 15): string {
    const words = content.split(/\s+/);
    const previewWords = words.slice(0, maxWords);
    const previewContent = previewWords.join(' ');
    return words.length > maxWords
      ? `${previewContent}${this.hint}`
      : `${previewContent}${this.hint}`;
  }
}
