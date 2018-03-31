import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public labels = ['budlight', 'heineken', 'yuengling'];
  public results = [0.9897540211677551, 0.0102459117770195, 6.418985898370977e-10];
  public top_k = [0, 1, 2];

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      console.log('taking picture');
    }, 5000);
  }

}
