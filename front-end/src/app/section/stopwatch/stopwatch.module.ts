import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeDisplayComponent } from './time-display/time-display.component'
import { ButtonsComponent } from './buttons/buttons.component';
import { StopwatchComponent } from './stopwatch.component';
import { RouterModule } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@NgModule({
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    StopwatchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    StopwatchComponent,

  ],
  // providers: [ //injectable 한 객체가 들어올 수 있음 
  //   PageToggleService, // 1. 모듈 계층에서 프로바이더 제공

  // ]
})
export class StopwatchModule { }
