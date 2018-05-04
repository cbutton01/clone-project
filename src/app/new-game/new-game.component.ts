import { Component, Output, EventEmitter } from '@angular/core';
import { Game }  from './../models/game.model';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  @Output() sendGame = new EventEmitter();

  submitForm(title: string, description: string, price: string, thumbnail: string){
    let newGame: Game = new Game(title, description, parseInt(price), thumbnail);
  }

}
