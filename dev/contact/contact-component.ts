import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {Contact} from "./contact";

@Component({
  selector: "contact",
  template: `        
        <div>
        <div>
        <label for="first-name">First Name:</label>
        <input [(ngModel)]="myContact.firstname" type="text"/>
</div>
        <div>
        <label for="last-name">Last Name:</label>
        <input [(ngModel)]="myContact.lastname" type="text"/>        
</div>
        <div>
        <label for="phone-number">Phone number: </label>
        <input [(ngModel)]="myContact.phone" type="text"/>
</div>
        <div>
        <label for="email">E-mail: </label>
        <input [(ngModel)]="myContact.email" type="text"/>
</div>
        
        <button (click)="onCreateNew()" > Create new contact from previous</button>
        </div>
    `,
  inputs: ["myContact"],
  styles: [`
      label {
      display: inline-block;
      width: 140px;
      }
      
      input {
      width: 250px;
      }
`],
})

export class ContactComponent {
  constructor(private _router: Router){}

  public myContact: Contact = null;

  onCreateNew() {
    this._router.navigate(["NewContact", {lastName: this.myContact.lastname}]);
  }
}
