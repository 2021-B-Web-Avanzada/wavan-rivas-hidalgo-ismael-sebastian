import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroDetailsComponent } from './genero-details.component';

describe('GeneroDetailsComponent', () => {
  let component: GeneroDetailsComponent;
  let fixture: ComponentFixture<GeneroDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneroDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
