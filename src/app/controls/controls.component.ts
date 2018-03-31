import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  constructor() { }

  goForward() {
    console.log('go forward');
  }

  goBackward() {
    console.log('go backward');
  }

  turnLeft() {
    console.log('turn left');
  }

  turnRight() {
    console.log('turn right');
  }

}
