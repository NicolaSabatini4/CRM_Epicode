import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFattureComponent } from './add-fatture.component';

describe('AddFattureComponent', () => {
  let component: AddFattureComponent;
  let fixture: ComponentFixture<AddFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
