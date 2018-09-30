import { Tool } from './tool.model';
export class Historial {
  initCoords: any;
  coords: any;
  color: string;
  size: number;
  tool: Tool;

  constructor(initCoords: any, coords: any, color: string, size: number, tool: Tool) {
    this.initCoords = initCoords;
    this.coords = coords;
    this.color = color;
    this.size = size;
    this.tool = tool;
  }
}
