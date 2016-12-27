import {Component} from "angular2/core";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router} from "angular2/src/router/router";
import {RouteParams} from "angular2/src/router/instruction";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {ControlGroup} from "angular2/src/common/forms/model";
import {FormBuilder} from "angular2/src/common/forms/form_builder";
import {Validators} from "angular2/src/common/forms/validators";

@Component({
  selector: 'new-contact',
  template: `        
      <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)"> <!--//control group-->
        <div>
        <label for="first-name">First Name:</label>
        <input id="first-name" type="text" 
        #firstName="ngForm"
        [ngFormControl]="myForm.controls['firstName']">
        <span *ngIf="!firstName.valid" > Not Valid! </span>
        </div>
        
        <div>
        <label for="last-name">Last Name:</label>
        <input id="last-name" type="text" 
        [ngFormControl]="myForm.controls['lastName']"/>        
        </div>
        
        <div>
        <label for="phone-number">Phone number: </label>
        <input id="phone-number" type="text" 
        [ngFormControl]="myForm.controls['phone']"/>
        </div> 
        
        <div>
        <label for="email">E-mail: </label>
        <input id="email" type="text" 
        [ngFormControl]="myForm.controls['email']"/>
        </div>
        
        <button type="submit" ng-disabled="!myForm.valid">Create Contact</button>
        
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

export class NewContactComponent implements OnInit{

  constructor(private  _contactService: ContactService, private _router:Router, private _routeParams: RouteParams, private _formBuilder: FormBuilder) {}
  myForm: ControlGroup;

  onAddContact(first, last, phone, mail) {
    let contact: Contact = {firstname:first, lastname:last, phone:phone, email:mail};

    this._contactService.insertContact(contact);
    this._router.navigate(["Contacts"]);
  }

  ngOnInit(): any {
    this.myForm =  this._formBuilder.group({
      'firstName':['', Validators.required],
      'lastName': [this._routeParams.get('lastName'), Validators.required],
      'phone': ['', Validators.required],
      'email': ['', Validators.required],
    });
  }

  onSubmit(value){
    this._contactService.insertContact(value);
    this._router.navigate(['Contacts']);
  }
}
