import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from './components/nav/nav.module';
import { NotificationModule } from './components/notification/notification.module';
import { AdminGuard } from './guards/admin-guard/admin-guard.guard';
import { AuthGuard } from './guards/auth-guard/auth-guard.guard';



@NgModule({
  imports: [
    CommonModule, NavModule, NotificationModule
  ],
  exports: [
    CommonModule, NavModule, NotificationModule
  ],
  providers: [AdminGuard, AuthGuard],
})
export class AssistCommonModule { }
