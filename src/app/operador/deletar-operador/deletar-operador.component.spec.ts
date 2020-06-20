import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarOperadorComponent } from './deletar-operador.component';

describe('DeletarOperadorComponent', () => {
  let component: DeletarOperadorComponent;
  let fixture: ComponentFixture<DeletarOperadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarOperadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
