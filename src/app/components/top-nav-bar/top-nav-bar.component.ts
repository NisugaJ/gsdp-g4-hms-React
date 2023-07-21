import { Component, Input } from '@angular/core'

@Component({
  selector: 'top-nav-bar',
  templateUrl: 'top-nav-bar.component.html',
  styleUrls: ['top-nav-bar.component.css'],
})
export class TopNavBar {
  @Input()
  image_alt: string = 'image'
  @Input()
  image_alt3: string = 'image'
  @Input()
  image_src2: string = '/assets/gsdp-g4-hms-logo-200h.png'
  @Input()
  pastedImage_src: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7da9a80b-407c-45b4-9b7f-1af65387e00f/e474aaa3-772d-4700-9be1-db1b3fdc69b3?org_if_sml=13825'
  @Input()
  image_alt1: string = 'image'
  @Input()
  pastedImage_alt: string = 'pastedImage'
  @Input()
  text: string = 'Hospital Management System'
  @Input()
  image_src1: string = '6053eb3a-8578-49c9-b2e4-bada425c873f'
  @Input()
  rootClassName: string = ''
  @Input()
  rootClassName1: string = ''
  @Input()
  heading: string = 'GENERAL HOSPITAL'
  @Input()
  image_src: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  image_alt2: string = 'image'
  constructor() {}
}
