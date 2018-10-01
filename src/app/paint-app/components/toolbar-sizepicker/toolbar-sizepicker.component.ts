import { defaultConfig } from './../../paint-app.config';
import { PaintService } from './../../services/paint.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-sizepicker',
  templateUrl: './toolbar-sizepicker.component.html',
  styleUrls: ['./toolbar-sizepicker.component.scss']
})
export class ToolbarSizepickerComponent implements OnInit {
  @Input() sizes;
  public activeSize: number;

  constructor(private paintService: PaintService) { }

  ngOnInit() {
    this.selectSize(defaultConfig.size);
  }

  public selectSize(size: number) {
    this.activeSize = size;
    this.paintService.activeSize = size;
  }
}
