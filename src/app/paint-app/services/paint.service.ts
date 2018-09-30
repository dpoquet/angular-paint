import { Injectable } from '@angular/core';

@Injectable()
export class PaintService {
  public activeColor: string;
  public activeSize: string;
  public activeTool;
  private historial = [];

  constructor() {}

  public startDraw() {
    console.log('Active Color: ', this.activeColor);
    console.log('Active Size: ', this.activeSize);
    console.log('Active Tool: ', this.activeTool);
  }

  public doDrawing() {}

  public endDraw() {}

  private reDraw() {}

  private resetBoard() {}

  private setHistorial() {}

  private doUndo() {}

  private doRedo() {}
}
