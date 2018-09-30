import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public availableColors = [
    '#f44035',
    '#ed1362',
    '#9b19ad',
    '#652fb2',
    '#3d4daa',
    '#4aaf56',
    '#159688',
    '#1fbbd2',
    '#1ba6f1',
    '#1f93f0',
    '#8ac453',
    '#cddb45',
    '#feec48',
    '#fdc13b',
    '#f79a30',
    '#000000',
    '#607c8b',
    '#9d9d9d',
    '#795448',
    '#f95523'];

  public availableSizes = ['1px', '3px', '5px', '10px'];

  constructor() {}

  ngOnInit() {}
}
