import {Component, EventEmitter} from 'angular2/core';
import {Output} from "angular2/src/core/metadata";

@Component({
  selector: 'child',
  template: `
        <h2>Child</h2>
        <p>Value entered in parent component: {{parentValue}}</p>
        <input type="text" #childInput (keyup)="onChange(childInput.value)">
        
    `,
  inputs: ['parentValue:passedValue'],
  outputs: ['childChanged'],
})

export class ChildComponent {
  parentValue: string;
  childChanged =  new EventEmitter<string>();
  @Output() otherWay =  new EventEmitter<string>();

  onChange(value:string) {
    console.log("--->" + value);
    this.childChanged.emit(value);
    this.otherWay.emit(value);
  }
}
