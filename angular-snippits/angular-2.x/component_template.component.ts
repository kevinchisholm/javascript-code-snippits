import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'SELECTOR_NAME_HERE',
  templateUrl: './component_template.html',
  styles: [ require('./component_template.scss') ]
})
export class ComponentTemplate {
  @Output() someHandler = new EventEmitter<any>();
  @Input() someInputBoolean: Boolean = false;
  @Input() someInputObject: any = {};

  constructor () {

  }

  ngOnInit (): void {

  }
  
  ngOnDestroy (): void {

  }

  method1 () {

  }
  
  method2 () {

  }
  
  method3 () {

  }
}
