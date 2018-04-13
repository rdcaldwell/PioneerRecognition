import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ControlsComponent } from './controls/controls.component';
import { ResultsComponent } from './results/results.component';
import { RobotService } from './services/robot.service';
import { HttpModule } from '@angular/http';
import { StreamComponent } from './stream/stream.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ControlsComponent,
    ResultsComponent,
    StreamComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [
    RobotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
