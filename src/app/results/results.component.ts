import { Component, OnInit } from '@angular/core';
import { RobotService } from '../services/robot.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public labels = [];
  public results = [];
  public top_k = [];

  constructor(private robotService: RobotService) { }

  ngOnInit() {
    setInterval(() => {
      this.robotService.captureImage().subscribe((data) => {
        this.labels = data.labels;
        this.results = data.results;
        this.top_k = data.top_k;
      });
    }, 5000);
  }

}
