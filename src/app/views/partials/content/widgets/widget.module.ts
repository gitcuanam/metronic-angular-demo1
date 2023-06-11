import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { CoreModule } from '../../../../core/core.module';
// Datatable
import { DataTableComponent } from './general/data-table/data-table.component';
import { Timeline2Component } from './timeline2/timeline2.component';
// General widgets
import { Widget1Component } from './widget1/widget1.component';
import { Widget12Component } from './widget12/widget12.component';
import { Widget14Component } from './widget14/widget14.component';
import { Widget26Component } from './widget26/widget26.component';
import { Widget4Component } from './widget4/widget4.component';
import { Widget5Component } from './widget5/widget5.component';

@NgModule({
	declarations: [
		DataTableComponent,
		// Widgets
		Widget1Component,
		Widget4Component,
		Widget5Component,
		Widget12Component,
		Widget14Component,
		Widget26Component,
		Timeline2Component,
	],
	exports: [
		DataTableComponent,
		// Widgets
		Widget1Component,
		Widget4Component,
		Widget5Component,
		Widget12Component,
		Widget14Component,
		Widget26Component,
		Timeline2Component,
	],
	imports: [
		CommonModule,
		PerfectScrollbarModule,
		NgScrollbarModule,
		MatTableModule,
		CoreModule,
		MatIconModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatPaginatorModule,
		MatSortModule,
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class WidgetModule {
}
