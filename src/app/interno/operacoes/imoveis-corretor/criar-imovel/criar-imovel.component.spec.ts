import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarImovelComponent } from './criar-imovel.component';

describe('CriarImovelComponent', () => {
  let component: CriarImovelComponent;
  let fixture: ComponentFixture<CriarImovelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarImovelComponent]
    });
    fixture = TestBed.createComponent(CriarImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
