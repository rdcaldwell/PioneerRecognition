import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
@Injectable()
export class RobotService {

  constructor(private http: Http) { }

  captureImage() {
    return this.http.get('http://10.0.0.223:8080/api/robot/captureImage').map(res => res.json());
  }

  turnLeft() {
    return this.http.get('http://10.0.0.223:8080/api/robot/left').map(res => res.json());
  }

  turnRight() {
    return this.http.get('http://10.0.0.223:8080/api/robot/right').map(res => res.json());
  }

  goForward() {
    return this.http.get('http://10.0.0.223:8080/api/robot/forward').map(res => res.json());
  }

  goBackward() {
    return this.http.get('http://10.0.0.223:8080/api/robot/backward').map(res => res.json());
  }

}
