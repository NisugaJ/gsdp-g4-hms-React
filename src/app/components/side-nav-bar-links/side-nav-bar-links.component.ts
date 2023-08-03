import { Component, Input } from '@angular/core'
import { Route, Router } from '@angular/router'
import { routes } from 'src/app/app.module'

@Component({
  selector: 'side-nav-bar-links',
  templateUrl: 'side-nav-bar-links.component.html',
  styleUrls: ['side-nav-bar-links.component.css'],
})
export class SideNavBarLinks {
  @Input()
  rootClassName1: string = ''
  @Input()
  button: string = 'Dashboard'
  @Input()
  rootClassName: string = ''

  routes: Route[] = routes;

  constructor(private router: Router) {}

  // checks whether the current route url (pathname) is equal to given route name
  hasRoute(route: string): boolean{
    const has: boolean = this.router.url === '/' + route 
    return has;
  }
}
