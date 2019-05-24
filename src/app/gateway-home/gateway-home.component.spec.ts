import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayHomeComponent } from './gateway-home.component';

describe('GatewayHomeComponent', () => {
  let component: GatewayHomeComponent;
  let fixture: ComponentFixture<GatewayHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatewayHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
