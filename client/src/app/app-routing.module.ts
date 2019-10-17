import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { APP_BASE_HREF } from '@angular/common';
import { BsRoutes } from '@bison/biskin-kit/lib/biskin/model/routes';

export const routes: BsRoutes = [
  { path: 'basket', component: BasketComponent, data: { id: 'basket', icon: 'nav_warenkorb', title: 'Basket' } },
  { path: 'dashboard', component: HomeComponent, data: { id: 'dashboard', icon: 'nav_dashboard', title: 'Dashboard' } },
  { path: '**', component: HomeComponent, data: { id: 'home', icon: 'nav_inventurliste', title: 'Home' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes as Routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
  ],
})
export class AppRoutingModule {}
