import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaWydawniczaComponent } from './oferta-wydawnicza.component';

describe('OfertaWydawniczaComponent', () => {
  let component: OfertaWydawniczaComponent;
  let fixture: ComponentFixture<OfertaWydawniczaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfertaWydawniczaComponent]
    });
    fixture = TestBed.createComponent(OfertaWydawniczaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
