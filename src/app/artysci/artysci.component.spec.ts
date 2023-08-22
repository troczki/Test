import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtysciComponent } from './artysci.component';

describe('ArtysciComponent', () => {
  let component: ArtysciComponent;
  let fixture: ComponentFixture<ArtysciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtysciComponent]
    });
    fixture = TestBed.createComponent(ArtysciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
