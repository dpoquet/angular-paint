import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintAppComponent } from './paint-app.component';

describe('PaintAppComponent', () => {
  let component: PaintAppComponent;
  let fixture: ComponentFixture<PaintAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
