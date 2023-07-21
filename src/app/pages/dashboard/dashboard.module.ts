import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Dashboard } from './dashboard.component'

const routes = [
  {
    path: '',
    component: Dashboard,
  },
]

@NgModule({
  declarations: [Dashboard],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Dashboard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
