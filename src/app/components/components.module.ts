import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { SideNavBar } from './side-nav-bar/side-nav-bar.component'
import { SideNavBarLinks } from './side-nav-bar-links/side-nav-bar-links.component'
import { TopNavBar } from './top-nav-bar/top-nav-bar.component'
import { PrimaryButton } from './primary-button/primary-button.component'
import { HorizontalRule } from './horizontal-rule/horizontal-rule.component'
import { TextInput } from './text-input/text-input.component'
import { SideNavSubButton } from './side-nav-sub-button/side-nav-sub-button.component'
import { SideNavMainButton } from './side-nav-main-button/side-nav-main-button.component'
import { DashboardItem } from './dashboard-item/dashboard-item.component'
import { LogoAndName } from './logo-and-name/logo-and-name.component'
import { AbstractButton } from './abstract-button/abstract-button.component'

@NgModule({
  declarations: [
    SideNavBar,
    SideNavBarLinks,
    TopNavBar,
    PrimaryButton,
    HorizontalRule,
    TextInput,
    SideNavSubButton,
    SideNavMainButton,
    DashboardItem,
    LogoAndName,
    AbstractButton,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SideNavBar,
    SideNavBarLinks,
    TopNavBar,
    PrimaryButton,
    HorizontalRule,
    TextInput,
    SideNavSubButton,
    SideNavMainButton,
    DashboardItem,
    LogoAndName,
    AbstractButton,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
