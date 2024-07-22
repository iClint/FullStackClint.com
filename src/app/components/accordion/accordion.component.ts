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
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  @Input({ required: true }) accordion!: ExpansionPanelModel[];

  panelPreview(content: string, maxWords: number = 15): string {
    const words = content.split(/\s+/);
    const previewWords = words.slice(0, maxWords);
    const previewContent = previewWords.join(' ');
    return words.length > maxWords
      ? `${previewContent} ...\nClick to read more`
      : `${previewContent} \nClick to read more`;
  }
}
