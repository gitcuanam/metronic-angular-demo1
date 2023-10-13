// Angular
import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

// RxJS
import { Observable } from 'rxjs';

// NGRX
import {
  select,
  Store,
} from '@ngrx/store';

import {
  currentUser,
  Logout,
  User,
} from '../../../../../core/auth';
// State
import { AppState } from '../../../../../core/reducers';

@Component({
  selector: 'kt-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  // Public properties
  user$: Observable<User>;

  @Input() userDropdownStyle = 'light';
  @Input() avatar = true;
  @Input() greeting = true;
  @Input() badge?: boolean;
  @Input() icon?: boolean;

  /**
   * Component constructor
   *
   * @param store: Store<AppState>
   */
  constructor(private store: Store<AppState>) {
    this.user$ = this.store.pipe(select(currentUser));
  }

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit(): void {
  }

  /**
   * Log out
   */
  logout() {
    this.store.dispatch(new Logout());
  }
}
