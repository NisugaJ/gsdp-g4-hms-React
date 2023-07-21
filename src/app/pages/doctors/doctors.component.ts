import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-doctors',
  templateUrl: 'doctors.component.html',
  styleUrls: ['doctors.component.css'],
})
export class Doctors {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Doctors - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Doctors - gsdp-g4-hms',
      },
    ])
  }
}
