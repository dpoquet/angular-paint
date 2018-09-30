import { PaintService } from './../../services/paint.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-sizepicker',
  templateUrl: './toolbar-sizepicker.component.html',
  styleUrls: ['./toolbar-sizepicker.component.scss']
})
export class ToolbarSizepickerComponent implements OnInit {
  @Input() sizes;
  public activeSize: string;

  constructor(private paintService: PaintService) { }

  ngOnInit() {
    this.selectSize('3px');
  }

  public selectSize(size: string) {
    this.activeSize = size;
    this.paintService.activeSize = size;
  }
}
