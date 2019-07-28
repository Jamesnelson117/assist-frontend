import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { RequestComponent } from './request/request.component';
import { AddRequestComponent } from './add/add.component';
import { EditRequestComponent } from './edit/edit.component';
import { RequestsCommentComponent } from './request-comments/request-comments.component';
import { RequestsSearchComponent } from './request-search/request-search.component';
import { RequestsFilterPipe } from './requests-filter-pipe/requests-filter-pipe.pipe';
import { AssistCommonModule } from '../common/common.module';
import { HttpClientModule } from '@angular/common/http';
import { RequestsRoutingModule } from './requests-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { requestsReducer } from './store/requests.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RequestEffects } from './store/requests.effects';
import { RequestService } from './store/requests.service';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContainerComponent,
    AddRequestComponent,
    EditRequestComponent,
    OverviewComponent,
    RequestComponent,
    RequestsCommentComponent,
    RequestsSearchComponent,
    RequestsFilterPipe],
  imports: [
    CommonModule,
    AssistCommonModule,
    HttpClientModule,
    RouterModule,
    RequestsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('requestsStore', requestsReducer),
    EffectsModule.forFeature([RequestEffects])
  ],
  providers: [RequestService]
})
export class RequestsModule { }
