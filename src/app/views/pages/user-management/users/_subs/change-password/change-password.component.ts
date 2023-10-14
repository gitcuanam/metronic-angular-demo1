// Angular
import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

// RxJS
import { BehaviorSubject } from 'rxjs';

import { Update } from '@ngrx/entity';
// NGRX
import { Store } from '@ngrx/store';

// Layout
import {
  LayoutUtilsService,
  MessageType,
} from '../../../../../../core/_base/crud';
// Auth
import {
  AuthService,
  User,
  UserUpdated,
} from '../../../../../../core/auth/';
// State
import { AppState } from '../../../../../../core/reducers';

export class PasswordValidation {
	/**
	 * MatchPassword
	 *
	 * @param AC: AbstractControl
	 */
		static MatchPassword(AC: AbstractControl) {
				const password = AC.get('password')?.value; // to get value in input tag
				const confirmPassword = AC.get('confirmPassword')?.value; // to get value in input tag
				if (password !== confirmPassword) {
			AC.get('confirmPassword')?.setErrors( {MatchPassword: true} );
				} else {
						return null;
				}
		}
}

@Component({
	selector: 'kt-change-password',
	templateUrl: './change-password.component.html',
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordComponent implements OnInit {
	// Public properties
	@Input() userId?: number;
	@Input() loadingSubject = new BehaviorSubject<boolean>(false);
	hasFormErrors = false;
	viewLoading = false;
	user?: User;
	changePasswordForm: FormGroup;

	/**
	 * Component constructor
	 *
	 * @param fb: FormBuilder
	 * @param auth: AuthService
	 * @param store: Store<AppState>
	 * @param layoutUtilsService: LayoutUtilsService
	 */
	constructor(private fb: FormBuilder, private auth: AuthService, private store: Store<AppState>,
		// tslint:disable-next-line:align
		private layoutUtilsService: LayoutUtilsService
	) {
		this.changePasswordForm = this.fb.group({
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required]
		});
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		this.loadData();
	}

	/**
	 * Load data
	 */
	loadData() {
		if (!this.userId) {
			return;
		}
		this.auth.getUserById(this.userId).subscribe(res => {
			this.user = res ?? undefined;
		});
	}

	/**
	 * Reset
	 */
	reset() {
		this.hasFormErrors = false;
		this.loadingSubject.next(false);
		this.changePasswordForm.markAsPristine();
		this.changePasswordForm.markAsUntouched();
		this.changePasswordForm.updateValueAndValidity();
	}

	/**
	 * Save data
	 */
	onSubmit() {
		this.loadingSubject.next(true);
		this.hasFormErrors = false;
		const controls = this.changePasswordForm.controls;
		/** check form */
		if (this.changePasswordForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			this.hasFormErrors = true;
			this.loadingSubject.next(false);

			return;
		}
		const userId = this.user?.id;
		if (!userId) {
			console.error('userId is undefined');
			console.log(userId);
			return;
		}

		if (!this.user) {
			console.error('user is undefined');
			console.log(userId);
			return;
		}
		this.user.password = controls.password.value;
		const updatedUser: Update<User> = {
			id: userId,
			changes: this.user
		};

		this.store.dispatch(new UserUpdated({
			partialUser: updatedUser,
			user: this.user
		}));

		this.loadData();
		this.loadingSubject.next(false);
		const message = `User password successfully has been changed.`;
		this.layoutUtilsService.showActionNotification(message, MessageType.Update, 5000, true, false);
		this.reset();
	}

	/**
	 * Close alert
	 *
	 * @param $event: Event
	 */
	onAlertClose($event) {
		this.hasFormErrors = false;
	}
}
