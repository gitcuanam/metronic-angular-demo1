import {
  CdkPortal,
  CdkPortalOutletAttachedRef,
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

  @ViewChild('declarativePortal') declPortal?: CdkPortal;
  // @ViewChild('declarativePortalTemplate') declPortalTemplate?: TemplateRef<unknown>;

  @ViewChild('titleTemplate') titleTemplate?: TemplateRef<unknown>

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

    console.log(this.templatePortal1);
    console.log(this.declPortal);
    console.log(this.titleTemplate);
    // console.log(JSON.stringify(this.titleTemplate));
    this.logCircularObject(this.titleTemplate);

    const circularReference: {otherData: 123, myself?: object}= {otherData: 123, myself: undefined};
    circularReference.myself = circularReference;
    this.logCircularObject(circularReference);
  }

  logCircularObject(circularReference?: object): void {
    if (!circularReference) {
      return;
    }
    const stringified = JSON.stringify(circularReference, this.getCircularReplacer());
    console.log(stringified);
  }



  getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };


  ngOnInit(): void {
  }

  onPortalAttached(view?: CdkPortalOutletAttachedRef) : void {
    console.log('onPortalAttached');
    console.log(view);
    view?.onDestroy((params: unknown) => {
      console.log('destroying view');
      if (!params) {
        console.log('destroying cb function has no params');
      } else {
        console.log('params of destroying cb function');
        console.log(params);
      }
    });
  }

}
