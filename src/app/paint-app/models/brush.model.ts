import { Tool } from './tool.model';

export class Brush extends Tool {
  constructor() {
    const simpleBrushConfig = {
      'lineJoin': 'round',
      'lineCap': 'round'
    };

    super('simple-brush', simpleBrushConfig);
  }
}
