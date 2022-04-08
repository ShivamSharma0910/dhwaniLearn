import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//material
import { OverlayModule } from '@angular/cdk/overlay';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
///component
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { CreateLeadComponent } from './shared/create-lead/create-lead.component';
import { ShowLeadComponent } from './shared/show-lead/show-lead.component';
import { ChlidComponent } from './shared/chlid/chlid.component';
import { FormBuilderComponent } from './shared/form-builder/form-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponentComponent } from './shared/chlid/dialog-component/dialog-component.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AComponent } from './shared/a/a.component';
import { BComponent } from './shared/b/b.component';



import { CommonService } from './common/common.service';
import { CallCommonInterceptor } from './common/call-common.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    CreateLeadComponent,
    ShowLeadComponent,
    ChlidComponent,
    FormBuilderComponent,
    DialogComponentComponent,
    AComponent,
    BComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    OverlayModule,
    ///Material Module
    MatButtonModule,
    MatInputModule,
    
    MatDialogModule,

    
    ],
  providers: [ CommonService,
    { provide: HTTP_INTERCEPTORS, useClass: CallCommonInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
