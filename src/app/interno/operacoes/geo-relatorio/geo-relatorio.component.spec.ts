import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoRelatorioComponent } from './geo-relatorio.component';

describe('GeoRelatorioComponent', () => {
  let component: GeoRelatorioComponent;
  let fixture: ComponentFixture<GeoRelatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeoRelatorioComponent]
    });
    fixture = TestBed.createComponent(GeoRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
