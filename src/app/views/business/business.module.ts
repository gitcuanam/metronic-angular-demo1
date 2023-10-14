import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { PartialsModule } from '../partials/partials.module';
import { UserListV2Component } from './user-list-v2/user-list-v2.component';

@NgModule({
  declarations: [
    UserListV2Component
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    PartialsModule,
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
