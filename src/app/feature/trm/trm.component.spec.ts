import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrmComponent } from './trm.component';

describe('TrmComponent', () => {
  let component: TrmComponent;
  let fixture: ComponentFixture<TrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
