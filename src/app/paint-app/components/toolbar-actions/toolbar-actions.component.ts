import { Component, OnInit } from '@angular/core';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar-actions',
  templateUrl: './toolbar-actions.component.html',
  styleUrls: ['./toolbar-actions.component.scss']
})
export class ToolbarActionsComponent implements OnInit {
  public faUndo = faUndo;
  public faRedo = faRedo;

  constructor() { }

  ngOnInit() {}

}
