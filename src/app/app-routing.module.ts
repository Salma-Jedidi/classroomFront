import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminComponent } from './admin/admin.component';
import { SignComponent } from './sign/sign.component';
import { EventComponent } from './event/event.component';
import { ClassComponent } from './class/class.component';
import { UserComponent } from './user/user.component';
import { SubjectComponent } from './subject/subject.component';
import { UseraffichageComponent } from './useraffichage/useraffichage.component';


const routes: Routes = [
  {path:'accueil',component:AccueilComponent},
  {path:'adminBoard',component:AdminComponent},
  {path:'events',component:EventComponent},
  {path:'classes',component:ClassComponent},
  {path:'users',component:UserComponent},
  {path:'subject',component:SubjectComponent},
  {path:'',component:SignComponent},
  {path:'useraffich',component:UseraffichageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
