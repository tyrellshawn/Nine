import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IOUComponent } from './iou.component';

describe('IOUComponent', () => {
  let component: IOUComponent;
  let fixture: ComponentFixture<IOUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IOUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IOUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
