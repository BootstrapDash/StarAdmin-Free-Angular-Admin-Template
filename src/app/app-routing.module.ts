import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { productComponent } from './product/product.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: productComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'dropdowns', component: DropdownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
