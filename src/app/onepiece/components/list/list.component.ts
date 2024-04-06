import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'onepiece-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class OnepieceListComponent {

  @Input()
  characters: Character[] = []

  @Output()
  onRemove: EventEmitter<string> = new EventEmitter();

  removeCharacter(characterId: string): void {
    this.onRemove.emit(characterId);
  }

}
