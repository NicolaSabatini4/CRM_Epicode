import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComuniComponent } from './edit-comuni.component';

describe('EditComuniComponent', () => {
  let component: EditComuniComponent;
  let fixture: ComponentFixture<EditComuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
