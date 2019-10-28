import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorFormComponent } from './simulator-form.component';

describe('SimulatorFormComponent', () => {
  let component: SimulatorFormComponent;
  let fixture: ComponentFixture<SimulatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
