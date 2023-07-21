import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ForgotPassword } from './forgot-password.component'

const routes = [
  {
    path: '',
    component: ForgotPassword,
  },
]

@NgModule({
  declarations: [ForgotPassword],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ForgotPassword],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ForgotPasswordModule {}
