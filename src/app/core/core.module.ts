import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavComponent } from './user-nav/user-nav.component';



@NgModule({
  imports: [CommonModule],
  exports: [UserNavComponent],
  declarations: [UserNavComponent]
})
export class CoreModule { }
