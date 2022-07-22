import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInputBtnComponent } from './add-input-btn.component';

describe('AddInputBtnComponent', () => {
  let component: AddInputBtnComponent;
  let fixture: ComponentFixture<AddInputBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInputBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInputBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
