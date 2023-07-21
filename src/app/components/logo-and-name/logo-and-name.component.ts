import { Component, Input } from '@angular/core'

@Component({
  selector: 'logo-and-name',
  templateUrl: 'logo-and-name.component.html',
  styleUrls: ['logo-and-name.component.css'],
})
export class LogoAndName {
  @Input()
  text: string = 'Hospital Management System'
  @Input()
  image_src: string = '/assets/gsdp-g4-hms-logo-400w.png'
  @Input()
  image_alt: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  heading: string = 'GENERAL HOSPITAL'
  constructor() {}
}
