import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HashDirective } from './directives/hash.directive';
import { ByTemplateComponent } from './by-template/by-template.component';
import { ByComponentComponent } from './by-component/by-component.component';
import { AppleComponent } from './components/apple/apple.component';
import { StrawberryComponent } from './components/strawberry/strawberry.component';

@NgModule({
  declarations: [
    AppComponent,

    HashDirective,
    ByTemplateComponent,
    ByComponentComponent,
    AppleComponent,
    StrawberryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
