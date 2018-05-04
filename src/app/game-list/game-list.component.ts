import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from './../models/game.model';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {
  @Input() childGameList: Game[];
  @Output() clickSender = new EventEmitter();

}
