import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderCourierComponent } from './order-courier/order-courier.component';
import { ListOrderComponent } from './list-order/list-order.component';


const routes: Routes = [
  { path: 'order-courier', component: OrderCourierComponent},
  { path: 'list-order', component: ListOrderComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [OrderCourierComponent, ListOrderComponent]
