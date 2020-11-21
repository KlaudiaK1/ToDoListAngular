import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent{
  @Output() submitEmitter: EventEmitter<string> = new EventEmitter();
  title = 'Hello World';

  submitValue(newTitle: string): void {
    if (newTitle === ''){
      return;
    }
    this.submitEmitter.emit(newTitle);
  }
}
