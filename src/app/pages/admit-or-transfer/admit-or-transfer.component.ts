import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'admit-or-transfer',
  templateUrl: 'admit-or-transfer.component.html',
  styleUrls: ['admit-or-transfer.component.css'],
})
export class AdmitOrTransfer {
  rawsvc0: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Admit-or-Transfer - gsdp-g4-hms')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Admit-or-Transfer - gsdp-g4-hms',
      },
    ])
  }
}
