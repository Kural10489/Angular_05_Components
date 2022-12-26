import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';
import { NoneComponent } from './none/none.component';
import { ShadowDomChildComponent } from './shadow-dom-child/shadow-dom-child.component';
import { ContentprojectionComponent } from './contentprojection/contentprojection.component';
@NgModule({
  declarations: [
    AppComponent,
    LifecyclehookComponent,
    ShadowDomComponent,
    NoneComponent,
    ShadowDomChildComponent,
    ContentprojectionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
