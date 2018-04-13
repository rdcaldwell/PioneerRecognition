import { Component, OnInit } from '@angular/core';
import { RobotService } from '../services/robot.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public labels = [];
  public results = [];
  public topK = [];

  constructor(private robotService: RobotService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getImageRecogntionResults();
    setInterval(() => {
      this.getImageRecogntionResults();
    }, 5000);
  }

  getImageRecogntionResults() {
    this.robotService.captureImage().subscribe((data) => {
      console.log(data);
      this.labels = data.labels;
      this.results = data.results;
      this.topK = data.top_k;
    });
  }

}
