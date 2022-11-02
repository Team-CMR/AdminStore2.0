import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Articulo
import { ArticuloListComponent } from './components/articulo/articulo-list/articulo-list.component';
import { ArticuloDetailsComponent } from './components/articulo/articulo-details/articulo-details.component';
import { AddArticuloComponent } from './components/articulo/add-articulo/add-articulo.component';
import { BarChartComponent } from './components/dashboard/bar-chart/bar-chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'articulos', pathMatch: 'full' },
  { path: 'articulos', component: ArticuloListComponent },
  { path: 'articulos/:cod_barras', component: ArticuloDetailsComponent },
  { path: 'add', component: AddArticuloComponent },
  { path: 'charts', component: BarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
