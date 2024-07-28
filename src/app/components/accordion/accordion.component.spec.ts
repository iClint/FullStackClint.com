import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionComponent, MatTooltipModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate correct preview text', () => {
    const content =
      'This is a long content that should be truncated for the preview';
    const preview = component.panelPreview(content, 5);

    expect(preview).toContain('This is a long content... Click to read more');
    expect(preview).toContain('Click to read more');
  });

  it('should handle short content without truncation', () => {
    const content = 'Short content';
    const preview = component.panelPreview(content, 10);

    expect(preview).toBe('Short content... Click to read more');
  });
});
