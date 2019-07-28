import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { OverviewComponent } from './overview/overview.component';
import { ContainerComponent } from './container/container.component';
import { AdminRouterModule } from './admin-routing.module';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './store/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/users.effects';
import { AdminGuard } from '../common/guards/admin-guard/admin-guard.guard';
import { UsersService } from './store/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../store/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NewUserComponent,
    OverviewComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    AdminRouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('usersStore', usersReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [
    AdminGuard,
    UsersService,
    AuthService
  ]
})
export class AdminModule { }
