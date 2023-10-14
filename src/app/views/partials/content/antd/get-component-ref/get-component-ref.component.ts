import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

import { HelloWorldComponent } from '../hello-world/hello-world.component';

@Component({
  selector: 'app-get-component-ref',
  templateUrl: './get-component-ref.component.html',
  styleUrls: ['./get-component-ref.component.scss']
})
export class GetComponentRefComponent implements OnInit {

  private _helloComponentRef?: ComponentRef<HelloWorldComponent>;
  private _helloComponentInstance?: HelloWorldComponent;

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
  ) {

  }

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent(): void {
    const helloComponentFactory = this._componentFactoryResolver.resolveComponentFactory(HelloWorldComponent);
    this._helloComponentRef = this._viewContainerRef.createComponent(helloComponentFactory);
    this._helloComponentInstance = this._helloComponentRef?.instance;
    // console.log(this._helloComponentRef);
    // console.log(this._helloComponentInstance);
  }

}
