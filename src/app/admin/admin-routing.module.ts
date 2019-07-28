import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OverviewComponent } from "./overview/overview.component";
import { NewUserComponent } from "./new-user/new-user.component";
import { AdminGuard } from '../common/guards/admin-guard/admin-guard.guard';
import { ContainerComponent } from './container/container.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivate: [AdminGuard],
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: OverviewComponent
      },
      {
        path: 'new',
        component: NewUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRouterModule {}