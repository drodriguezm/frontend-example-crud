import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import { NotFoundComponent } from './components/not-found/not-found.component';


//Primeng
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';




import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { PersonEditComponent } from './components/person/person-edit/person-edit.component';
import { PersonAddComponent } from './components/person/person-add/person-add.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // NotFoundComponent,
    PersonListComponent,
    PersonAddComponent,
    PersonEditComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
