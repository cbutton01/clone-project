import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { GameListComponent } from './game-list/game-list.component';
import { NewGameComponent } from './new-game/new-game.component';


const appRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'new-game',
    component: NewGameComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
