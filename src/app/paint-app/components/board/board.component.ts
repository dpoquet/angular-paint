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

  constructor(private paintService: PaintService) {}

  ngOnInit() {}

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
    this.setCanvasSize();
    // Fixing bug about lines that disappear when canvas is resized
    this.paintService.drawHistorial();
  }

  public handleStartDraw(ev) {
    ev.preventDefault();
    const coords = this.getCoords(ev);
    this.paintService.startDraw(coords);
  }

  public handleDrawing(ev) {
    ev.preventDefault();
    const coords = this.getCoords(ev);
    this.paintService.doDrawing(coords);
  }

  public handleEndDraw(ev) {
    ev.preventDefault();
    const coords = this.getCoords(ev);
    this.paintService.endDraw(coords);
  }

  private getCoords(ev) {
    let posX = ev.layerX;
    let posY = ev.layerY;

    if (ev.touches && ev.touches[0]) {
      const bounding = this.canvasElement.getBoundingClientRect();
      posX = ev.touches[0]['clientX'] - bounding.left; // Fix mouse pos
      posY = ev.touches[0]['clientY'] - bounding.top; // Fix mouse pos
    }

    return {
      'positionX': posX,
      'positionY': posY
    };
  }
}
