import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaintAppComponent } from './paint-app/paint-app.component';
import { BoardComponent } from './paint-app/components/board/board.component';
import { ToolbarComponent } from './paint-app/components/toolbar/toolbar.component';
import { ToolbarActionsComponent } from './paint-app/components/toolbar-actions/toolbar-actions.component';
import { ToolbarColorpickerComponent } from './paint-app/components/toolbar-colorpicker/toolbar-colorpicker.component';
import { ToolbarSizepickerComponent } from './paint-app/components/toolbar-sizepicker/toolbar-sizepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    PaintAppComponent,
    BoardComponent,
    ToolbarComponent,
    ToolbarActionsComponent,
    ToolbarColorpickerComponent,
    ToolbarSizepickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
