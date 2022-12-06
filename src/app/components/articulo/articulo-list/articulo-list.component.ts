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
    navigator.serviceWorker.register('/service-worker.js');

    var axios = require('axios');
    var data = JSON.stringify({
      "user": "RodrigoP",
      "password": "RodrigoP9982736"
    });

    var config = {
      method: 'post',
      url: 'https://localhost:8004/api/auth/generate-token',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };

    axios(config)
      .then((response: any) => {
        console.log(response.data);
        localStorage.setItem('Token', response.data.token);
        this.retrieveArticulos();

      })
      .catch(function (error: any) {
        console.log(error);
      });
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

    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://localhost:8004/api/articulos',
      crossorigin: true,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("Token"),
      }
    };

    axios(config)
      .then((response: any) => {
        this.articulos = response.data;
        this.count = response.length;
        this.message = '';
      })
      .catch(function (error: any) {
        console.log(error);
      });

    // this.articuloService.getAll(params)
    //   .subscribe({
    //     next: (response) => {
    //       this.articulos = response;
    //       this.count = response.length;
    //       this.message = '';
    //     },
    //     error: (error) => {
    //       console.log(error);
    //     },
    //     complete: () => console.info('complete')
    //   });
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
