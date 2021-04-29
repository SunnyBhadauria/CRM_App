import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativepointListComponent } from './cumulativepoint-list.component';

describe('CumulativepointListComponent', () => {
  let component: CumulativepointListComponent;
  let fixture: ComponentFixture<CumulativepointListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CumulativepointListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativepointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
