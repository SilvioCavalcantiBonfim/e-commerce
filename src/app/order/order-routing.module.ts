import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [{ path: '', component: OrderComponent }, {path: 'success', component: SuccessComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
