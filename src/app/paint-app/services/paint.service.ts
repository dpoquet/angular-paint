import { Injectable } from '@angular/core';
import { Historial } from '../models/historial.model';

@Injectable()
export class PaintService {
  public context;
  public activeColor: string;
  public activeSize: number;
  public activeTool;
  private lastPosX: number;
  private lastPosY: number;
  private startDrawing: Boolean = false;
  private currentHistorial;
  private redoHistory = [];
  private undoHistory = [];

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

    this.currentHistorial = new Historial(
      {'positionX': coords.positionX, 'positionY': coords.positionY}, [], this.activeColor, this.activeSize, this.activeTool);

    this.startDrawing = true;
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

    this.currentHistorial.coords.push({'positionX': coords.positionX, 'positionY': coords.positionY});
  }

  public endDraw(coords) {
    if (!this.startDrawing) {
      return;
    }

    this.context.closePath();
    this.context.save();

    this.lastPosX = coords.positionX;
    this.lastPosY = coords.positionY;

    this.undoHistory.push(this.currentHistorial);
    this.currentHistorial = null;

    this.startDrawing = false;
  }

  public doUndo() {
    const removedElement = this.undoHistory.pop();

    if (removedElement) {
      this.redoHistory.push(removedElement);
      this.drawHistorial();
    }
  }

  public doRedo() {
    const removedElement = this.redoHistory.pop();

    if (removedElement) {
      this.undoHistory.push(removedElement);
      this.drawHistorial();
    }
  }

  public resetBoard() {
    if (!this.context) {
      return;
    }

    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }

  public drawHistorial() {
    if (!this.context) {
      return;
    }

    this.resetBoard();

    this.undoHistory.forEach(history => {
      this.context.strokeStyle = history.color;
      this.context.lineWidth = history.size;

      for (const key in history.tool.config) {
        if (this.activeTool.config.hasOwnProperty(key)) {
          const propierty = this.activeTool.config[key];
          this.context[key] = propierty;
        }
      }

      this.context.beginPath();
      this.context.moveTo(history.initCoords.positionX, history.initCoords.positionY);
      this.context.stroke();

      let lastPosX = history.initCoords.positionX;
      let lastPosY = history.initCoords.positionY;

      history.coords.forEach(coords => {
        this.context.moveTo(lastPosX, lastPosY);
        this.context.lineTo(coords.positionX, coords.positionY);
        this.context.stroke();

        lastPosX = coords.positionX;
        lastPosY = coords.positionY;
      });
    });
  }
}
