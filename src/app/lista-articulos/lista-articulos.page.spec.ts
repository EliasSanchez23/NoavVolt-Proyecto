import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaArticulosPage } from './lista-articulos.page';

describe('ListaArticulosPage', () => {
  let component: ListaArticulosPage;
  let fixture: ComponentFixture<ListaArticulosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArticulosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
