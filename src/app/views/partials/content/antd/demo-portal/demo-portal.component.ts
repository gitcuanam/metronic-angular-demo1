import {
  ComponentPortal,
  DomPortal,
  Portal,
  PortalOutlet,
  TemplatePortal,
} from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ComponentRef,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { HelloWorldComponent } from '../hello-world/hello-world.component';

@Component({
  selector: 'app-demo-portal',
  templateUrl: './demo-portal.component.html',
  styleUrls: ['./demo-portal.component.scss']
})
export class DemoPortalComponent implements OnInit, AfterViewInit {

  portalOutlet?: PortalOutlet;
  selectedPortal?: Portal<unknown>;

  noDataTemplatePortal?: TemplatePortal<unknown>;
  @ViewChild('noData') noDataTemplate?: TemplateRef<unknown>;

  domPortal?: DomPortal<unknown>;
  @ViewChild('domTemplate') domTemplate?: ElementRef<HTMLElement>;

  templatePortal1?: TemplatePortal<unknown>;
  @ViewChild('templateData1') templateData1?: TemplateRef<unknown>;

  component1Portal?: ComponentPortal<unknown>;
  component1Ref?: ComponentRef<unknown>

  constructor(private _viewContainerRef: ViewContainerRef) {
  }

  ngAfterViewInit(): void {
    // TODO: Tại sao khi đưa dòng này vào constructor lại báo lỗi run-time Cannot read properties of undefined (reading 'createEmbeddedView')
    // this.noDataTemplatePortal = new TemplatePortal(this.noDataTemplate, this._viewContainerRef);
    this.noDataTemplatePortal = this.noDataTemplate ? new TemplatePortal(this.noDataTemplate, this._viewContainerRef) : undefined;
    this.templatePortal1 = this.templateData1 ? new TemplatePortal(this.templateData1, this._viewContainerRef) : undefined;
    this.domPortal = this.domTemplate ? new DomPortal(this.domTemplate) : undefined;

    // this.component1Ref = this._viewContainerRef.createComponent(HelloWorldComponent)
    this.component1Portal = new ComponentPortal(HelloWorldComponent);
  }

  ngOnInit(): void {
  }

}
