import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { SignComponent } from './sign/sign.component';
import { EventComponent } from './event/event.component';
import { ClassComponent } from './class/class.component';
import { SubjectComponent } from './subject/subject.component';
import { UserComponent } from './user/user.component';
import { UseraffichageComponent } from './useraffichage/useraffichage.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AdminComponent,
    SignComponent,
    EventComponent,
    ClassComponent,
    SubjectComponent,
    UserComponent,
    UseraffichageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
