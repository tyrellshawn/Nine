import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownFormComponent } from './breakdown-form.component';

describe('BreakdownFormComponent', () => {
  let component: BreakdownFormComponent;
  let fixture: ComponentFixture<BreakdownFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakdownFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakdownFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
