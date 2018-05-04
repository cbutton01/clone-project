import { Component } from '@angular/core';
import { Game } from './models/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Games From You';
  masterGameList: Game[] = [];

  addGame(newGame: Game){
    this.masterGameList.push(newGame);
  }
}
