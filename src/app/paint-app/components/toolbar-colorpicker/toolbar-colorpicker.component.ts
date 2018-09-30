import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-colorpicker',
  templateUrl: './toolbar-colorpicker.component.html',
  styleUrls: ['./toolbar-colorpicker.component.scss']
})
export class ToolbarColorpickerComponent implements OnInit {
  @Input() colors;
  public activeColor = '#000000';

  constructor() {}

  ngOnInit() {}

  public selectColor(color) {
    this.activeColor = color;
    // TODO: Set acriveColor to service
  }
}
