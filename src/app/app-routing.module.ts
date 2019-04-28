import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialCardsComponent } from './material-cards/material-cards.component';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { MaterialTabsComponent } from './material-tabs/material-tabs.component';
const routes: Routes = [
  {path:'material-cards', component:MaterialCardsComponent},
  {path:'material-buttons', component:MaterialButtonsComponent},
  {path:'material-tabs', component:MaterialTabsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
