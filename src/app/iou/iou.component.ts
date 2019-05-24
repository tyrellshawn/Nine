import { Component, OnInit } from '@angular/core';
import {IOUServe} from '../services/IOUServe';

@Component({
  selector: 'app-iou',
  templateUrl: './iou.component.html',
  styleUrls: ['./iou.component.css']
})
export class IOUComponent implements OnInit {
  IOUService: IOUServe;
  constructor() { }

  ngOnInit() {
  }

}
