import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComuniComponent } from './add-comuni.component';

describe('AddComuniComponent', () => {
  let component: AddComuniComponent;
  let fixture: ComponentFixture<AddComuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
