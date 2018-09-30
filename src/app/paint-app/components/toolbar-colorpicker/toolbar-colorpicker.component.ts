import { PaintService } from './../../services/paint.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-colorpicker',
  templateUrl: './toolbar-colorpicker.component.html',
  styleUrls: ['./toolbar-colorpicker.component.scss']
})
export class ToolbarColorpickerComponent implements OnInit {
  @Input() colors;
  public activeColor: string;

  constructor(private paintService: PaintService) {}

  ngOnInit() {
    this.selectColor('#000000');
  }

  public selectColor(color: string) {
    this.activeColor = color;
    this.paintService.activeColor = color;
  }
}
