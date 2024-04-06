import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class OnepieceService {

  characters: Character[] = [
    {
      bountry: 3000000000,
      id: uuid(),
      name: 'Monkey D. Luffy'
    },
    {
      bountry: 3000000000,
      id: uuid(),
      name: 'Trafalgar D. Water Law'
    },
    {
      bountry: 4320000000,
      id: uuid(),
      name: 'Marshall D. Teach'
    }
  ];

  newCharacter(character: Character): void {

    character.id = uuid();

    this.characters.push(character);

  }

  removeCharacter(characterId: string): void {

    this.characters = this.characters.filter(c => c.id !== characterId);

  }
}
