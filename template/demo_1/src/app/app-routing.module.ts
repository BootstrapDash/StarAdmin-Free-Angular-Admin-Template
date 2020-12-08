import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./screens/dashboard/dashboard.component";

import { ButtonsComponent } from "./ui-elements/buttons/buttons.component";
import { TablesComponent } from "./ui-elements/tables/tables.component";
import { TypographyComponent } from "./ui-elements/typography/typography.component";
import { DropdownComponent } from "./ui-elements/dropdown/dropdown.component";

import { LoaderComponent } from "./advanced-elements/loader/loader.component";

import { MdiComponent } from "./icons/mdi/mdi.component";

import { FormsComponent } from "./forms/forms.component";

import { ChartjsComponent } from "./charts/chartjs/chartjs.component";

import { LoginComponent } from "./sample-pages/login/login.component";
import { RegisterComponent } from "./sample-pages/register/register.component";
import { Page404Component } from "./sample-pages/page404/page404.component";
import { Page500Component } from "./sample-pages/page500/page500.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "forms", component: FormsComponent },
  { path: "buttons", component: ButtonsComponent },
  { path: "tables", component: TablesComponent },
  { path: "mdi", component: MdiComponent },
  { path: "typography", component: TypographyComponent },
  { path: "dropdowns", component: DropdownComponent },
  { path: "loaders", component: LoaderComponent },
  { path: "chartjs", component: ChartjsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "404-page", component: Page404Component },
  { path: "500-page", component: Page500Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
