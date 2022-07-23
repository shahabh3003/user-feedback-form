import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionlistComponent } from './subcriptionlist.component';

describe('SubcriptionlistComponent', () => {
  let component: SubcriptionlistComponent;
  let fixture: ComponentFixture<SubcriptionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcriptionlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcriptionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
