import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from './../models/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @Input() childGameList: Game[];
  @Output() clickSender = new EventEmitter();


}
