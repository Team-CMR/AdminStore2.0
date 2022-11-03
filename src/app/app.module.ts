import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Articulo
import { AddArticuloComponent } from './components/articulo/add-articulo/add-articulo.component';
import { ArticuloDetailsComponent } from './components/articulo/articulo-details/articulo-details.component';
import { ArticuloListComponent } from './components/articulo/articulo-list/articulo-list.component';

// Angular Material
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// NgxPagination
import { NgxPaginationModule } from 'ngx-pagination';
import { BarChartComponent } from './components/dashboard/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/dashboard/line-chart/line-chart.component';
import { BestSellerComponent } from './components/dashboard/best-seller/best-seller.component';


@NgModule({
  declarations: [
    AppComponent,
    AddArticuloComponent,
    ArticuloDetailsComponent,
    ArticuloListComponent,
    BarChartComponent,
    LineChartComponent,
    BestSellerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    NgxPaginationModule,
    MatMenuModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
