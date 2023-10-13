// Angular
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

// RxJS
import { Observable } from 'rxjs';

// Loading bar
import { LoadingBarService } from '@ngx-loading-bar/core';

// Layout
import { LayoutConfigService } from '../../../../../core/_base/layout';
// Portlet
import { PortletBodyComponent } from './portlet-body.component';
import { PortletFooterComponent } from './portlet-footer.component';
import { PortletHeaderComponent } from './portlet-header.component';

export interface PortletOptions {
	test?: any;
}

@Component({
	selector: 'kt-portlet',
	templateUrl: './portlet.component.html',
	exportAs: 'ktPortlet'
})
export class PortletComponent implements OnInit, AfterViewInit {
	// Public properties
	@Input() loading$?: Observable<boolean>;
	// portlet extra options
	@Input() options?: PortletOptions;
	// portlet root classes
	@Input() class?: string;

	@ViewChild('portlet', {static: true}) portlet?: ElementRef;

	// portlet header component template
	@ViewChild(PortletHeaderComponent, {static: true}) header?: PortletHeaderComponent;
	// portlet body component template
	@ViewChild(PortletBodyComponent, {static: true}) body?: PortletBodyComponent;
	// portlet footer component template
	@ViewChild(PortletFooterComponent, {static: true}) footer?: PortletFooterComponent;

	/**
	 * Component constructor
	 *
	 * @param el: ElementRef
	 * @param loader: LoadingBarService
	 * @param layoutConfigService: LayoutConfigService
	 */
	constructor(private el: ElementRef, public loader: LoadingBarService,
	            private layoutConfigService: LayoutConfigService) {
		this.loader.complete();
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
	}

	/**
	 * After view init
	 */
	ngAfterViewInit() {
	}

}
