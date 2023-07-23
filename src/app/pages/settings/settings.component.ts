import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.css'],
})
export class Settings {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Settings - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Settings - gsdp-g4-hms',
      },
    ])
  }
}
