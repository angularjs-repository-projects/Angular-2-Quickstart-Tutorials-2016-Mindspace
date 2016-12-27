import {Component} from "angular2/core";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router} from "angular2/src/router/router";
import {RouteParams} from "angular2/src/router/instruction";
import {OnInit} from "angular2/src/core/linker/interfaces";

@Component({
  template: `        
      <form #myForm="ngForm" (ngSubmit)="onSubmit()"> <!--//control group-->
        <div>
        <label for="first-name">First Name:</label>
        <input id="first-name" type="text"
        ngControl="firstName"
        required
        [(ngModel)]="newContact.firstname"
        >
        </div>
        
        <div>
        <label for="last-name">Last Name:</label>
        <input id="last-name" type="text" ngControl="lastName"
        required
        [(ngModel)]="newContact.lastname"
        />        
        </div>
        
        <div>
        <label for="phone-number">Phone number: </label>
        <input id="phone-number" type="text" ngControl="phone"
        required
        [(ngModel)]="newContact.phone"
        />
        </div> 
        
        <div>
        <label for="email">E-mail: </label>
        <input id="email" type="text" ngControl="email"
        required
        [(ngModel)]="newContact.email"
        />
        </div>
        
        <button type="submit" >Create Contact</button>
        
      </form>
    `,

  providers: [ContactService],
  styles: [`
      label {
      display: inline-block;
      width: 140px;
      }
      
      input {
      width: 250px;
      }
      .ng-invalid {
        border: 1px solid red;
      }
`],
})

export class NewContactComponentForms implements OnInit{
  constructor(private  _contactService: ContactService, private _router:Router, private _routeParams: RouteParams) {}

  //we save the contact
  newContact: Contact;

  onAddContact(first, last, phone, mail) {
    let contact: Contact = {firstname:first, lastname:last, phone:phone, email:mail};

    this._contactService.insertContact(contact);
    this._router.navigate(["Contacts"]);
  }

  ngOnInit(): any {
    this.newContact = {firstname:'', lastname: this._routeParams.get('lastName'), phone:'', email:''};
  }

  onSubmit() {
    this._contactService.insertContact(this.newContact);
    this._router.navigate(['Contacts']);
  }
}
