import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarColorpickerComponent } from './toolbar-colorpicker.component';

describe('ToolbarColorpickerComponent', () => {
  let component: ToolbarColorpickerComponent;
  let fixture: ComponentFixture<ToolbarColorpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarColorpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarColorpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
