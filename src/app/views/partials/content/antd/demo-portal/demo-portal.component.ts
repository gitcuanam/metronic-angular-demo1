import { PortalOutlet } from '@angular/cdk/portal';
import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-demo-portal',
  templateUrl: './demo-portal.component.html',
  styleUrls: ['./demo-portal.component.scss']
})
export class DemoPortalComponent implements OnInit {

  portalOutlet: PortalOutlet;

  constructor() { }

  ngOnInit(): void {
  }

}
