import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo/articulo.model';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})
export class ArticuloListComponent implements OnInit {


  articulos?: Articulo[];
  currentArticulo: Articulo = {};
  currentIndex = -1;
  cod_barras = '';


  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.retrieveArticulos();
  }

  retrieveArticulos(): void {
    this.articuloService.getAll()
      .subscribe({
        next: (data) => {
          this.articulos = data;
          console.log(data)
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveArticulos();
    this.currentArticulo = {};
    this.currentIndex = -1;
  }

  setActiveArticulo(articulo: Articulo, index: number): void {
    this.currentArticulo = articulo;
    this.currentIndex = index;
  }

  removeAllArticulos(): void {
    this.articuloService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res)
        },
        error: (e) => console.error(e)
      });
  }

  searchCodBarras(): void {
    this.currentArticulo = {};
    this.currentIndex = -1;

    this.articuloService.findByBarcode(this.cod_barras)
      .subscribe({
        next: (data) => {
          this.articulos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
