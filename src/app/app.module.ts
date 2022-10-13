import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Articulo
import { AddArticuloComponent } from './components/articulo/add-articulo/add-articulo.component';
import { ArticuloDetailsComponent } from './components/articulo/articulo-details/articulo-details.component';
import { ArticuloListComponent } from './components/articulo/articulo-list/articulo-list.component';

// 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddArticuloComponent,
    ArticuloDetailsComponent,
    ArticuloListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
