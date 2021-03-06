import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { APP_ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { DirectivesComponent } from './Components/directives/directives.component';
import { PipesComponent } from './Components/pipes/pipes.component';
import { StripHtmlPipe } from './Pipes/strip-html.pipe';
import { TruncateStringPipe } from './Pipes/truncate-string.pipe';
import { FormsComponent } from './Components/forms/forms.component';

import { UserProviderService } from './Services/user-provider.service';
import { ReactiveFormsComponent } from './Components/reactive-forms/reactive-forms.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DataBindingComponent,
    DirectivesComponent,
    PipesComponent,
    StripHtmlPipe,
    TruncateStringPipe,
    FormsComponent,
    ReactiveFormsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es-ES"},
    UserProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
