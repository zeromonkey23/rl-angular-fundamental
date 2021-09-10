import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  @Input() title = '';

  data = 'ini adalah data';
  array = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
    console.log('training init');
  }

  ngOnDestroy(): void {
    console.log('training destroyed');
  }
}
