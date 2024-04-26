import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuniteBannerComponent } from './communite-banner.component';

describe('CommuniteBannerComponent', () => {
  let component: CommuniteBannerComponent;
  let fixture: ComponentFixture<CommuniteBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommuniteBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommuniteBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
