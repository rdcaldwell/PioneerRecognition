import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class RobotService {

  private ROBOT_SERVER = 'http://481bbc92.ngrok.io/api/robot';

  constructor(private http: Http) { }

  captureImage() {
    return this.http.get(`${this.ROBOT_SERVER}/captureImage`).map(res => res.json());
  }

  turnLeft() {
    return this.http.get(`${this.ROBOT_SERVER}/left`).map(res => res.json());
  }

  turnRight() {
    return this.http.get(`${this.ROBOT_SERVER}/right`).map(res => res.json());
  }

  goForward() {
    return this.http.get(`${this.ROBOT_SERVER}/forward`).map(res => res.json());
  }

  goBackward() {
    return this.http.get(`${this.ROBOT_SERVER}/backward`).map(res => res.json());
  }

}
