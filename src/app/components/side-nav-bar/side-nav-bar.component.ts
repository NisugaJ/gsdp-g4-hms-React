import { Component, Input } from '@angular/core'

@Component({
  selector: 'side-nav-bar',
  templateUrl: 'side-nav-bar.component.html',
  styleUrls: ['side-nav-bar.component.css'],
})
export class SideNavBar {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
