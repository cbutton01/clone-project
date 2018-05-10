import { Component, OnInit } from '@angular/core';
import { Game } from './../models/game.model';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [GameService]
})
export class GameListComponent {
  games: Game[];
  constructor(private router: Router, private gameService: GameService){}

  ngOnInit(){
    this.games = this.gameService.getGames()
  }
}
