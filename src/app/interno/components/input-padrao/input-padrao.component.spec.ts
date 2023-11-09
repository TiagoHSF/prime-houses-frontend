import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPadraoComponent } from './input-padrao.component';

describe('InputPadraoComponent', () => {
  let component: InputPadraoComponent;
  let fixture: ComponentFixture<InputPadraoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputPadraoComponent]
    });
    fixture = TestBed.createComponent(InputPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
