import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCorretorComponent } from './dashboard-corretor.component';

describe('DashboardCorretorComponent', () => {
  let component: DashboardCorretorComponent;
  let fixture: ComponentFixture<DashboardCorretorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCorretorComponent]
    });
    fixture = TestBed.createComponent(DashboardCorretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
