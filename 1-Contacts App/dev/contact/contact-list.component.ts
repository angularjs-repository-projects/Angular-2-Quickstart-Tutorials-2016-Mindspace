import {Component} from "angular2/core";
import {ContactComponent} from "./contact-component"
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {NewContactComponent} from "./new-contact.component";
import {NewContactComponentForms} from "./new-contact.componentForms";

@Component({
  selector: "contact-list",
  template:`
        <ul>
            <li 
            *ngFor="#contact of contacts" 
            (click)="onSelect(contact)" 
            [class.clicked]="selectedContact == contact">
                {{contact.firstname}} {{contact.lastname}}     
            </li>
        </ul>
        <contact *ngIf="selectedContact!= null" [myContact]="selectedContact"></contact>
    `,
  providers: [ContactService, NewContactComponentForms],
  styleUrls: ["src/css/contact-list.css"],
  directives: [ContactComponent],
})

export class ContactListComponent implements OnInit{
  //private auto cria e faz set variavel
  constructor(private _contactService: ContactService) {
    //this.getContacts();
  }

  public contacts: Contact[] = null;
  public selectedContact  = null;

  onSelect(contact){
    this.selectedContact = contact;
  }

  getContacts(){
    this._contactService.getContacts().then( (contacts:Contact[])=> this.contacts = contacts);
  }

  ngOnInit():any {
    this.getContacts();
  }
}
