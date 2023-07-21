import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-admission',
  templateUrl: 'admission.component.html',
  styleUrls: ['admission.component.css'],
})
export class Admission {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Admission - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Admission - gsdp-g4-hms',
      },
    ])
  }
}
