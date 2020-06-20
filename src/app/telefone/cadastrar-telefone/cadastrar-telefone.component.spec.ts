import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTelefoneComponent } from './cadastrar-telefone.component';

describe('CadastrarTelefoneComponent', () => {
  let component: CadastrarTelefoneComponent;
  let fixture: ComponentFixture<CadastrarTelefoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarTelefoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
