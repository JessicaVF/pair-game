import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImgCardComponent } from './card-img-card.component';

describe('CardImgCardComponent', () => {
  let component: CardImgCardComponent;
  let fixture: ComponentFixture<CardImgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardImgCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
