import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ToolsComponent } from './views/tools/tools.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent,
},{
  path: "tools",
  component: ToolsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
