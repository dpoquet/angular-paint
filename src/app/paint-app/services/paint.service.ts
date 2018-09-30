import { Injectable } from '@angular/core';

@Injectable()
export class PaintService {
  public activeColor: string;
  public activeSize: number;
  public activeTool;
  private lastPosX: number;
  private lastPosY: number;
  private startDrawing: Boolean = false;
  private historial = [];

  constructor() {}

  public startDraw(context, coords) {
    console.log('Active Color: ', this.activeColor);
    console.log('Active Size: ', this.activeSize);
    console.log('Active Tool: ', this.activeTool);

    if (this.startDrawing) {
      return;
    }

    this.lastPosX = coords.positionX;
    this.lastPosY = coords.positionY;

    context.strokeStyle = this.activeColor;
    context.lineWidth = this.activeSize;

    // Config //
    context.lineJoin = 'round';
    context.lineCap = 'round';

    context.beginPath();
    context.moveTo(this.lastPosX, this.lastPosY);
    context.stroke();
    this.startDrawing = true;

    console.log('Start Drawing');
  }

  public doDrawing(context, coords) {
    if (!this.startDrawing) {
      return;
    }

    context.moveTo(this.lastPosX, this.lastPosY);
    context.lineTo(coords.positionX, coords.positionY);
    context.stroke();

    this.lastPosX = coords.positionX;
    this.lastPosY = coords.positionY;

    console.log('Drawing');
  }

  public endDraw(context, coords) {
    context.closePath();

    this.lastPosX = coords.positionX;
    this.lastPosY = coords.positionY;

    this.startDrawing = false;

    console.log('End Drawing');
  }

  private reDraw() {}

  private resetBoard() {}

  private setHistorial() {}

  private doUndo() {}

  private doRedo() {}
}
