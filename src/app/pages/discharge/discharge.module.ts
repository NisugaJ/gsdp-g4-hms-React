import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { Discharge } from './discharge.component'

const routes = [
  {
    path: '',
    component: Discharge,
  },
]

@NgModule({
  declarations: [Discharge],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Discharge],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DischargeModule {}
