import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'onepiece-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class OnepieceCreateComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    bountry: 0,
    id: '',
    name: '',
  };

  newCharacter(): void {

    if (this.character.bountry <= 0 || this.character.name === '') {

      alert('Agrega la información del pirata para continuar');

      return;

    }

    this.onNewCharacter.emit(this.character);

    this.character = {
      bountry: 0,
      id: '',
      name: '',
    }
  }
}
