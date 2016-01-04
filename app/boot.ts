import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_DIRECTIVES, ROUTER_BINDINGS, APP_BASE_HREF} from 'angular2/router';
import {HTTP_BINDINGS} from 'angular2/http';
import {HeroService} from './hero.service';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
  HeroService,
  ROUTER_BINDINGS,
  HTTP_BINDINGS
]);
