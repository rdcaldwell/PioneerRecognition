import { Component, OnInit } from '@angular/core';
import { RobotService } from '../services/robot.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  constructor(private robotService: RobotService) { }

  goForward() {
    this.robotService.goForward().subscribe((data) => {
      console.log(data);
    });
  }

  goBackward() {
    this.robotService.goBackward().subscribe((data) => {
      console.log(data);
    });
  }

  turnLeft() {
    this.robotService.turnLeft().subscribe((data) => {
      console.log(data);
    });
  }

  turnRight() {
    this.robotService.turnRight().subscribe((data) => {
      console.log(data);
    });
  }

}
