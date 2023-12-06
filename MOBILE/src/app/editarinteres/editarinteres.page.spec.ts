import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarinteresPage } from './editarinteres.page';

describe('EditarinteresPage', () => {
  let component: EditarinteresPage;
  let fixture: ComponentFixture<EditarinteresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarinteresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
