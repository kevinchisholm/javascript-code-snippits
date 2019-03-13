import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { SomeModule } from './some-path/some-module.component';
import { SomeRoutingModule } from './some-routing.module';
import { PreBuiltModule } from 'pre-build-module-name';
import { MyService } from '../services/my-service.service';

import { MyCustomComponent } from './notification-management-admin-channels-app/add-channel-modal/my-custom.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SomeModule
    PreBuiltModule,
    SomeRoutingModule
  ],
  providers: [
    MyService
  ],
  declarations: [
    MyCustomComponent
  ],
  exports: [
    MyCustomComponent
  ]
})
export class MyModule { }
