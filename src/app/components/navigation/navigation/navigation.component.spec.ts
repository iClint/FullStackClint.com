import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, NavigationComponent],
      providers: [{ provide: ActivatedRoute, useValue: '' }],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should display the correct number of navigation items', () => {
     const navItems = fixture.debugElement.queryAll(By.css('a'));
     expect(navItems.length).toBe(component.navOptions.length);
   });

 it('should display navigation items with correct labels and paths', () => {
   const navItems = fixture.debugElement.queryAll(By.css('a'));

   component.navOptions.forEach((navOption, index) => {
     expect(navItems[index].nativeElement.textContent).toContain(
       navOption.label,
     );
     expect(navItems[index].nativeElement.getAttribute('href')).toBe(
       '/' + navOption.path,
     );
   });
 });
});
