import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFattureComponent } from './edit-fatture.component';

describe('EditFattureComponent', () => {
  let component: EditFattureComponent;
  let fixture: ComponentFixture<EditFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
