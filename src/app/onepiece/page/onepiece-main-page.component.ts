import { Component } from '@angular/core';
import { OnepieceService } from '../services/onepiece-service.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'onepiece-main-page',
  templateUrl: './onepiece-main-page.component.html',
  styleUrl: './onepiece-main-page.component.css'
})
export class OnepieceMainPageComponent {

  constructor(private onepieceService: OnepieceService) {

  }

  get Characters(): Character[] {
    return [...this.onepieceService.characters];
  }

  newCharacter(character: Character): void {
    this.onepieceService.newCharacter(character);
  }

  removeCharacter(characterId: string): void {
    this.onepieceService.removeCharacter(characterId);
  }
}
