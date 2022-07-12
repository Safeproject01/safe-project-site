import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinUsComponent } from './components/template/join-us/join-us.component';
import { ContactComponent } from './views/contact/contact.component';

import { HomeComponent } from './views/home/home.component';
import { MediaComponent } from './views/media/media.component';
import { ToolsComponent } from './views/tools/tools.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent,
},{
  path: "tools",
  component: ToolsComponent
}
,{
  path: "join-us",
  component: JoinUsComponent
},{
  path: "media",
  component: MediaComponent
},{
  path: "contact",
  component: ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
