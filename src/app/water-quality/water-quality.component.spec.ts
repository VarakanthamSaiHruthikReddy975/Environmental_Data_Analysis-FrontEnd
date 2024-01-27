import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterQualityComponent } from './water-quality.component';

describe('WaterQualityComponent', () => {
  let component: WaterQualityComponent;
  let fixture: ComponentFixture<WaterQualityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterQualityComponent]
    });
    fixture = TestBed.createComponent(WaterQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
