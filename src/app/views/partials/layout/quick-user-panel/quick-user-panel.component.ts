// Angular
import {
  Component,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';

import {
  select,
  Store,
} from '@ngrx/store';

// Layout
import { OffcanvasOptions } from '../../../../core/_base/layout';
import {
  currentUser,
  Logout,
  User,
} from '../../../../core/auth';
import { AppState } from '../../../../core/reducers';

@Component({
  selector: 'kt-quick-user-panel',
  templateUrl: './quick-user-panel.component.html',
  styleUrls: ['./quick-user-panel.component.scss']
})
export class QuickUserPanelComponent implements OnInit {
  user$: Observable<User>;
  // Public properties
  offcanvasOptions: OffcanvasOptions = {
    overlay: true,
    baseClass: 'offcanvas',
    placement: 'right',
    closeBy: 'kt_quick_user_close',
    toggleBy: 'kt_quick_user_toggle'
  };

  constructor(private store: Store<AppState>) {
    this.user$ = this.store.pipe(select(currentUser));
  }

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
