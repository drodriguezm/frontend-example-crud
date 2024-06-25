import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PersonEditComponent } from './components/person/person-edit/person-edit.component';
import { PersonAddComponent } from './components/person/person-add/person-add.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReuseStrategyCustom } from 'src/app/custom/reuse-strategy.custom';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

const routes:Routes=[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'about',component: AboutComponent },
  { path:'home',component: HomeComponent },
  { path:'menu',component: MenuComponent },
  { path:'persons',component: PersonListComponent,
    children:[
      { path:'add',component: PersonAddComponent },
      { path:':id',component: PersonEditComponent/*, data:{reuseComponent:false}*/}
    ]
  },
  { path:'**',component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: ReuseStrategyCustom}
  ],
})
export class AppRoutingModule { }
