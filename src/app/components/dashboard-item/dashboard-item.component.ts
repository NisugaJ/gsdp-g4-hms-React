import { Component, Input } from '@angular/core'

@Component({
  selector: 'dashboard-item',
  templateUrl: 'dashboard-item.component.html',
  styleUrls: ['dashboard-item.component.css'],
})
export class DashboardItem {
  @Input()
  button: string = 'Patients'
  @Input()
  heading: string = '0'
  @Input()
  text: string = 'Text'
  constructor() {}
}
