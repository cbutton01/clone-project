import { Injectable } from '@angular/core';
import { Game } from './models/game.model';
import { GAMES } from './mock-games';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(){
    return GAMES;
  }

}
