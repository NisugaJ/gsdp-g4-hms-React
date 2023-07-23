import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { WardTypes } from './ward-types.component'

const routes = [
  {
    path: '',
    component: WardTypes,
  },
]

@NgModule({
  declarations: [WardTypes],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [WardTypes],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WardTypesModule {}
