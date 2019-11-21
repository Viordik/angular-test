import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCourierComponent } from './order-courier.component';

describe('OrderCourierComponent', () => {
  let component: OrderCourierComponent;
  let fixture: ComponentFixture<OrderCourierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCourierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
