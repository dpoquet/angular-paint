import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-sizepicker',
  templateUrl: './toolbar-sizepicker.component.html',
  styleUrls: ['./toolbar-sizepicker.component.scss']
})
export class ToolbarSizepickerComponent implements OnInit {
  @Input() sizes;
  public activeSize = '3px';

  constructor() { }

  ngOnInit() {}

  public selectSize(size) {
    this.activeSize = size;
    // TODO: Set activeSize to service
  }
}
