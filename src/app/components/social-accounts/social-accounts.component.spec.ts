import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAccountsComponent } from './social-accounts.component';

describe('SocialAccountsComponent', () => {
  let component: SocialAccountsComponent;
  let fixture: ComponentFixture<SocialAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
