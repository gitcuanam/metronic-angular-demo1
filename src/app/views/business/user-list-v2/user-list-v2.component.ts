import {
  Component,
  OnInit,
} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'kt-user-list-v2',
  templateUrl: './user-list-v2.component.html',
  styleUrls: ['./user-list-v2.component.scss']
})
export class UserListV2Component implements OnInit {

  constructor(
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
  }

}
