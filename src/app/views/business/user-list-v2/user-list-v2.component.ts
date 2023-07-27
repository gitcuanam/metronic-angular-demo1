import {
  Component,
  OnInit,
} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { DemoMenuTriggerDirective } from 'src/app/core/_base/layout';

@Component({
  selector: 'kt-user-list-v2',
  templateUrl: './user-list-v2.component.html',
  styleUrls: ['./user-list-v2.component.scss']
})
export class UserListV2Component implements OnInit {

  constructor(
    private translateService: TranslateService,
  ) {
    console.log(translateService);
  }

  ngOnInit(): void {
  }

  toggleButton(): void {
    console.log('toggle menu clicked!');
  }

}
