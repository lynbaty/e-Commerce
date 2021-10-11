import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorsComponent } from './core/test-errors/test-errors.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumbs: 'Home'}},
  {path: 'test-errors',component: TestErrorsComponent, data: {breadcrumbs: 'Error'}},
  {path: 'not-found',component: NotFoundComponent, data: {breadcrumbs: 'Not found'}}, 
  {path: 'server-error',component: ServerErrorComponent, data: {breadcrumbs: 'Server Error'}},
  {path: 'shop', loadChildren: ()=> import('./shop/shop.module').then(mod => mod.ShopModule),data: {breadcrumbs: 'Shop'}},
  {path: 'basket', loadChildren: ()=> import('./basket/basket.module').then(mod => mod.BasketModule),data: {breadcrumbs: 'Basket'}},
  {path: 'account', loadChildren: ()=> import('./account/account.module').then(mod => mod.AccountModule),data: {breadcrumbs:{skip:true}}},
  {path: 'checkout',canActivate: [AuthGuard], loadChildren: ()=> import('./checkout/checkout.module').then(mod => mod.CheckoutModule),data: {breadcrumbs: 'Checkout'}},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
