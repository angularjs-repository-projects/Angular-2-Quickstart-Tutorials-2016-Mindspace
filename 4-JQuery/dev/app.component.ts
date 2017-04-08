import {Component} from 'angular2/core';
import {JqueryComponent} from "./jquery.component";

@Component({
    selector: 'my-app',
    template: `
        <my-jquery></my-jquery>
    `,
  directives: [JqueryComponent]
})
export class AppComponent {

}
