import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-patients',
  templateUrl: 'patients.component.html',
  styleUrls: ['patients.component.css'],
})
export class Patients {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Patients - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Patients - gsdp-g4-hms',
      },
    ])
  }
}
