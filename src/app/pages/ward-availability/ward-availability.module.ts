import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../../components/components.module'
import { WardAvailability } from './ward-availability.component'

const routes = [
  {
    path: '',
    component: WardAvailability,
  },
]

@NgModule({
  declarations: [WardAvailability],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [WardAvailability],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WardAvailabilityModule {}
