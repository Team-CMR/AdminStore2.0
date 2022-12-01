import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo/articulo.model';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})
export class ArticuloListComponent implements OnInit {
  articulos: Articulo[] = []
  currentArticulo: Articulo = {};
  currentIndex = -1;
  cod_barras = '';
  message = '';
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [5, 10, 20];

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.retrieveArticulos();
  }

  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};

    // if (searchBarcode) {
    //   params[`cod_barras`] = searchBarcode;
    // }  

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveArticulos(): void {
    const params = this.getRequestParams(this.page, this.pageSize);

    this.articuloService.getAll(params)
      .subscribe({
        next: (response) => {
          this.articulos = response;
          this.count = response.length;
          this.message = '';
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => console.info('complete')
      });
  }

  // retrieveArticulos(): void {
  //   this.articuloService.getAll()
  //     .subscribe({
  //       next: (data) => {
  //         this.articulos = data;
  //         console.log(data)
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  refreshList(): void {
    this.retrieveArticulos();
    this.currentArticulo = {};
    this.currentIndex = -1;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveArticulos();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveArticulos();
  }

  setActiveArticulo(articulo: Articulo, index: number): void {
    this.currentArticulo = articulo;
    this.currentIndex = index;
    console.log(this.currentArticulo)
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

  updateEstatus(status: boolean, barcode: any): void {
    let newStatus = 0;
    if (!status) {
      newStatus = 1;
    } else {
      newStatus = 0;
    }

    const dataEstatus = {
      activo: newStatus,
    };

    this.message = '';

    this.articuloService.updateEstatus(barcode, dataEstatus)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Status active changed!';
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  // Pagination
  // Pagination


  // onclick event 

  // onclick event 

}
