import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditartecnologiaPage } from './editartecnologia.page';

describe('EditartecnologiaPage', () => {
  let component: EditartecnologiaPage;
  let fixture: ComponentFixture<EditartecnologiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditartecnologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
