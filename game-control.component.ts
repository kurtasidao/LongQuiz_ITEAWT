import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {
  counter = 0;
  interval: any;
  seconds = 1 * 1000;

  @Input() gameComponent: any
  @Output() gameStartEmitter = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.gameStartEmitter.emit(this.counter++);
      }, this.seconds);
  }

  onGameStop() {
    clearInterval(this.interval);
  }

  ngOnDestroy() {
    this.onGameStop();
  }
}
