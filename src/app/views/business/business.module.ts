import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { UserListV2Component } from './user-list-v2/user-list-v2.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    UserListV2Component
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild([
			{
				path: 'user',
				component: UserListV2Component
			}
		]),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class BusinessModule { }
