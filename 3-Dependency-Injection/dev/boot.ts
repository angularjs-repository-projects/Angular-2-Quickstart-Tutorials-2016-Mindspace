///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {DataService} from "./data.service";

bootstrap(AppComponent, [ROUTER_DIRECTIVES, HTTP_PROVIDERS, DataService]);
