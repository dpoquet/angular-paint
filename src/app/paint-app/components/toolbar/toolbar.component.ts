import { Brush } from './../../models/brush.model';
import { Component, OnInit } from '@angular/core';
import { Tool } from '../../models/tool.model';
import { PaintService } from '../../services/paint.service';
import { availableColors, availableSizes } from '../../paint-app.config';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public availableColors = availableColors;
  public availableSizes = availableSizes;
  public activeTool = new Brush();

  constructor(private paintService: PaintService) {
    this.paintService.activeTool = this.activeTool;
  }

  ngOnInit() {}
}
