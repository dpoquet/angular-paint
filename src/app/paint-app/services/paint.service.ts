import { Injectable } from '@angular/core';

@Injectable()
export class PaintService {
  public context;
  public activeColor: string;
  public activeSize: number;
  public activeTool;
  private lastPosX: number;
  private lastPosY: number;
  private startDrawing: Boolean = false;
  private historial = [];

  constructor() {}

  public startDraw(coords) {
    if (this.startDrawing || !this.context || !this.activeColor || !this.activeTool || !this.activeSize) {
      return;
    }

    this.lastPosX = coords.positionX;
    this.lastPosY = coords.positionY;

    this.context.strokeStyle = this.activeColor;
    this.context.lineWidth = this.activeSize;

    // Set custom config from model //
    for (const key in this.activeTool.config) {
      if (this.activeTool.config.hasOwnProperty(key)) {
        const propierty = this.activeTool.config[key];
        this.context[key] = propierty;
      }
    }

    this.context.beginPath();
    this.context.moveTo(this.lastPosX, this.lastPosY);
    this.context.stroke();
    this.startDrawing = true;

    console.log('Start Drawing');
  }

  public doDrawing(coords) {
    if (!this.startDrawing) {
      return;
    }

    this.context.moveTo(this.lastPosX, this.lastPosY);
    this.context.lineTo(coords.positionX, coords.positionY);
    this.context.stroke();

    this.lastPosX = coords.positionX;
    this.lastPosY = coords.positionY;

    console.log('Drawing');
  }

  public endDraw(coords) {
    this.context.closePath();
    this.context.save();

    this.lastPosX = coords.positionX;
    this.lastPosY = coords.positionY;

    this.startDrawing = false;

    console.log('End Draw');
  }

  public resetBoard() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }

  private reDraw() {}

  private setHistorial() {}

  private doUndo() {}

  private doRedo() {}
}
