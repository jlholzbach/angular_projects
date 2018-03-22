import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
  current = 1;
  interval;
  
  @Output() startingGame = new EventEmitter<number>();
  @Output() endingGame = new EventEmitter<{}>();

  startGame() {
    this.interval = setInterval(() => {this.startingGame.emit(this.current++);}, 1000);
  }

  stopGame() {
    this.current = 1;
    clearInterval(this.interval);
    this.endingGame.emit();
  }

  constructor() { }

  ngOnInit() {}

}
