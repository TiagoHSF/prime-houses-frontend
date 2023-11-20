import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemImoveisComponent } from './listagem-imoveis.component';

describe('ListagemImoveisComponent', () => {
  let component: ListagemImoveisComponent;
  let fixture: ComponentFixture<ListagemImoveisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemImoveisComponent]
    });
    fixture = TestBed.createComponent(ListagemImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
