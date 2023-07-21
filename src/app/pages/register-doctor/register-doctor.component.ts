import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'register-doctor',
  templateUrl: 'register-doctor.component.html',
  styleUrls: ['register-doctor.component.css'],
})
export class RegisterDoctor {
  raw1bh6: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('RegisterDoctor - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'RegisterDoctor - gsdp-g4-hms',
      },
    ])
  }
}
