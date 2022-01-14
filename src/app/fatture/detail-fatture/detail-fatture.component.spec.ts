import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFattureComponent } from './detail-fatture.component';

describe('DetailFattureComponent', () => {
  let component: DetailFattureComponent;
  let fixture: ComponentFixture<DetailFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
