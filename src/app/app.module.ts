import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { rootReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effect';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthGuard } from './common/guards/auth-guard/auth-guard.guard';
import { AuthService } from './store/services/auth.service';
import { CustomSerializer } from './store/reducers/router.reducer';
import { RequestsModule } from './requests/requests.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    RequestsModule,
    AppRoutingModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
