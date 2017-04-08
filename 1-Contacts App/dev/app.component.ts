import {Component} from 'angular2/core';
import {ContactListComponent} from "./contact/contact-list.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/src/router/route_config/route_config_decorator";
import {NewContactComponent} from "./contact/new-contact.component";

@Component({
  selector: 'my-app',
  template: `
        <header>
          <nav>
            <a [routerLink]="['Contacts']">Contacts</a>
            <a [routerLink]="['NewContact']">NewContact</a>
          </nav>
        </header>
        <div class="main">
          <router-outlet></router-outlet>
      </div>  
    `,
  directives: [ContactListComponent, ROUTER_DIRECTIVES, NewContactComponent],
})

@RouteConfig([
  { path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true, },
  { path: '/newcontact', name:'NewContact', component: NewContactComponent },
])

export class AppComponent {
}
