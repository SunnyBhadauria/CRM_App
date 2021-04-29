import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativePointComponent } from './cumulative-point.component';

describe('CumulativePointComponent', () => {
  let component: CumulativePointComponent;
  let fixture: ComponentFixture<CumulativePointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CumulativePointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
