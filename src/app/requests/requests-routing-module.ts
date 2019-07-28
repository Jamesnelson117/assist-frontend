import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RequestComponent } from "./request/request.component";
import { OverviewComponent } from "./overview/overview.component";
import { AddRequestComponent } from "./add/add.component";
import { EditRequestComponent } from "./edit/edit.component";
import { ContainerComponent } from './container/container.component';
import { AuthGuard } from '../common/guards/auth-guard/auth-guard.guard';

const requestRoutes: Routes = [
  { path: 'requests', 
    component: ContainerComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: 'new', component: AddRequestComponent },
      { path: 'overview', component: OverviewComponent },
      { path: 'edit/:id', component: EditRequestComponent },
      { path: ':id', component: RequestComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(requestRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RequestsRoutingModule {}