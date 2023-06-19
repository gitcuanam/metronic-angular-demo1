import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  NzTableComponent,
  NzTableModule,
} from 'ng-zorro-antd/table';

import {
  TranslateModule,
  TranslatePipe,
} from '@ngx-translate/core';

@NgModule({
  declarations: [
  ],
  exports: [
    NzTableComponent,
    TranslatePipe,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NzTableModule,
  ]
})
export class SharedModule { }
