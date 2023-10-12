import {
  Portal,
  PortalOutlet,
  TemplatePortal,
} from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

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

  templatePortal1?: TemplatePortal<unknown>;
  @ViewChild('templateData1') templateData1?: TemplateRef<unknown>;

  constructor(private _viewContainerRef: ViewContainerRef) {
  }

  ngAfterViewInit(): void {
    // TODO: Tại sao khi đưa dòng này vào constructor lại báo lỗi run-time Cannot read properties of undefined (reading 'createEmbeddedView')
    // this.noDataTemplatePortal = new TemplatePortal(this.noDataTemplate, this._viewContainerRef);
    this.noDataTemplatePortal = this.noDataTemplate ? new TemplatePortal(this.noDataTemplate, this._viewContainerRef) : undefined;
    this.templatePortal1 = this.templateData1 ? new TemplatePortal(this.templateData1, this._viewContainerRef) : undefined;
    this.selectedPortal = this.templatePortal1;
  }

  ngOnInit(): void {
  }

}
