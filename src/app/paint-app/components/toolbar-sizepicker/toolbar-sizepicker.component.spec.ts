import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSizepickerComponent } from './toolbar-sizepicker.component';

describe('ToolbarSizepickerComponent', () => {
  let component: ToolbarSizepickerComponent;
  let fixture: ComponentFixture<ToolbarSizepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarSizepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSizepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
