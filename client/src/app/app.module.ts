import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsKitModule } from '@bison/biskin-kit';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';

const components = [HomeComponent, BasketComponent];

@NgModule({
  declarations: [AppComponent, ...components],
  imports: [BrowserModule, BsKitModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
