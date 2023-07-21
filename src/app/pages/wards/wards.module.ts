import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { Wards } from './wards.component'

const routes = [
  {
    path: '',
    component: Wards,
  },
]

@NgModule({
  declarations: [Wards],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Wards],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WardsModule {}
