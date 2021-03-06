import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaDetailsComponent } from './pelicula-details.component';

describe('PeliculaDetailsComponent', () => {
  let component: PeliculaDetailsComponent;
  let fixture: ComponentFixture<PeliculaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
