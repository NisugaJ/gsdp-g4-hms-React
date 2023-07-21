import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'reset-password',
  templateUrl: 'reset-password.component.html',
  styleUrls: ['reset-password.component.css'],
})
export class ResetPassword {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ResetPassword - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ResetPassword - gsdp-g4-hms',
      },
    ])
  }
}
