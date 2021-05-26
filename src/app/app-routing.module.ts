import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { OffersComponent } from './offers/offers.component';
import { PrasentComponent } from './prasent/prasent.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [{path: 'home' , component:HomeComponent },
{path: 'women' , component:WomenComponent},
{path: 'men' , component:MenComponent},
{path: 'offers' , component:OffersComponent},
{path:'present', component:PrasentComponent},
{path:'',redirectTo:'/present', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
