// Angular
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

// NGRX
import { Store } from '@ngrx/store';

// AppState
import { AppState } from '../../../core/reducers';

const userManagementPermissionId = 2;
@Component({
	selector: 'kt-user-management',
	templateUrl: './user-management.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserManagementComponent implements OnInit {
	// Public properties
	// hasUserAccess$: Observable<boolean>;
	// currentUserPermission$: Observable<Permission[]>;

	/**
	 * Component constructor
	 *
	 * @param store: Store<AppState>
	 * @param router: Router
	 */
	constructor(private store: Store<AppState>, private router: Router) {
		// this.currentUserPermission$ = this.store.pipe(select(currentUserPermissions));
		// this.hasUserAccess$ = of(false);
		// this.currentUserPermission$.subscribe(permissions => {
		// 	if (permissions && permissions.length > 0) {
		// 		this.hasUserAccess$ =
		// 			this.store.pipe(select(checkHasUserPermission(userManagementPermissionId)));
		// 		this.hasUserAccess$.subscribe(res => {
		// 			if (!res) {
		// 				this.router.navigateByUrl('/error/403');
		// 			}
		// 		});
		// 	}
		// });
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
	}
}
