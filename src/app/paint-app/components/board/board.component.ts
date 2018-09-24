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
    private lastX: number;
    private lastY: number;
    private startDraw: Boolean = false;

    constructor() {
        console.log('Hi board!');
    }

    ngOnInit() {}

    ngAfterViewInit() {
        this.canvasElement = this.boardCanvas.nativeElement;
        this.setCanvasSize();
        this.canvasContext = this.canvasElement.getContext('2d');
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
        if (this.startDraw) {
            console.log('error, ya estás dibujando');
              return;
        }

        this.lastX = ev.layerX;
        this.lastY = ev.layerY;

        console.log('handleStartDraw', ev);
        this.canvasContext.strokeStyle = '#000000';
        this.canvasContext.lineWidth = 5;
        this.canvasContext.lineJoin = 'round';
        this.canvasContext.lineCap = 'round';
        this.canvasContext.beginPath();
        this.canvasContext.moveTo(this.lastX, this.lastY);
        this.canvasContext.stroke();
        this.startDraw = true;
    }

    public handleDrawing(ev) {
        console.log('handleDrawing', ev);

        if (!this.startDraw) {
            console.log('No has empezado a dibujar');
            return;
        }

        const currentX = ev.layerX;
        const currentY = ev.layerY;

        this.canvasContext.moveTo(this.lastX, this.lastY);
        this.canvasContext.lineTo(currentX, currentY);
        this.canvasContext.stroke();

        this.lastX = currentX;
        this.lastY = currentY;
    }

    public handleEndDraw(ev) {
        console.log('handleEndDraw', ev);
        this.canvasContext.closePath();

        this.lastX = ev.layerX;
        this.lastY = ev.layerY;

        this.startDraw = false;
    }
}
