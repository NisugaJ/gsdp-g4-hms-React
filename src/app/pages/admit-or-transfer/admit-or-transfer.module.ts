import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { AdmitOrTransfer } from './admit-or-transfer.component'

const routes = [
  {
    path: '',
    component: AdmitOrTransfer,
  },
]

@NgModule({
  declarations: [AdmitOrTransfer],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AdmitOrTransfer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdmitOrTransferModule {}
