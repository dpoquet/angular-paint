import { PaintService } from './../../services/paint.service';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, AfterViewInit {
  @ViewChild('boardCanvas') boardCanvas: any;
  @ViewChild('boardCanvas') public boardContainer: ElementRef;
  private canvasContext: CanvasRenderingContext2D;
  private canvasElement: HTMLCanvasElement;

  constructor(private paintService: PaintService) {
    console.log('Hi board!');
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.canvasElement = this.boardCanvas.nativeElement;
    this.setCanvasSize();
    this.canvasContext = this.canvasElement.getContext('2d');
    this.paintService.context = this.canvasContext;
  }

  private setCanvasSize() {
    const parentWidth = this.boardContainer.nativeElement.parentElement.offsetWidth;
    const parentHeight = this.boardContainer.nativeElement.parentElement.offsetHeight;

    this.canvasElement.width = parentWidth;
    this.canvasElement.height = parentHeight;
  }

  public onResizeBoard() {
    // Fix bug remove lines when canvas resize
    this.setCanvasSize();
  }

  public handleStartDraw(ev) {
    const coords = {
      'positionX': ev.layerX,
      'positionY': ev.layerY
    };

    this.paintService.startDraw(coords);
  }

  public handleDrawing(ev) {
    const coords = {
      'positionX': ev.layerX,
      'positionY': ev.layerY
    };

    this.paintService.doDrawing(coords);
  }

  public handleEndDraw(ev) {
    const coords = {
      'positionX': ev.layerX,
      'positionY': ev.layerY
    };

    this.paintService.endDraw(coords);
  }
}
