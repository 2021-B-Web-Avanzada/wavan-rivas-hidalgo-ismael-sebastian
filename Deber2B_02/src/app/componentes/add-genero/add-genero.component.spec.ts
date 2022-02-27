import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeneroComponent } from './add-genero.component';

describe('AddGeneroComponent', () => {
  let component: AddGeneroComponent;
  let fixture: ComponentFixture<AddGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
