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

    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://localhost:8004/api/articulos',
      crossorigin: true,
      headers: {
        'Access-Control-Request-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJBUFAgUFdBIEFOR1VMQVIgLyBTUFJJTkcgQk9PVCIsImp0aSI6IjEiLCJzdWIiOiJ3d3cudmFsaWRhbmRvLXRva2VuLXB3YS5jb20iLCJhdXRob3JpdGllcyI6WyJBRE1JTiJdLCJuYW1lIjoiQWRtQ2xhdWRpYSIsImVtYWlsIjoiYWRtaW4uY2xhdWRpYUBtYWlsLmNvbSIsInJvbCI6IkFETUlOIiwiaWF0IjoxNjcwMDIzMjc4LCJleHAiOjE2NzAwMjM4Nzh9.K4VPALkyrLMKWCiQ8G4VNQZY0OXZ0JERzBFDJjiPW0qQ0VQgnjtvBog-0oHwRdElQn_MjyZFghG3kyxNPJKpWmkCppx4XRKST6r3LrIscjlNpLB4m4c87FdNvlgubBJ8ub6AMSaHYOXrBvOaDtXycKAwB2aTgjKjPNCs7fC7NuxQWVFwYpbhsr8KRHreXtHHJEpvQEELQI28X94YDPKYwKyBaOAwCC8oWJZLb0loCoOI0MTqIpVgvTauYCDy72yByz-XLa3d5Sn-nAVqdDk7vJ2OHgMLeYQkqb57tKMNmVXOKuDNNvJBKAZ0757pSJ901TfRF9Bynz3YJ1gMFoe9ULx3v7GobYY7kaSVi5eaWp4YmgxfU8CRMoHdWakJjWPz_VcIqrPU22wxBR-MpUUodLgucZh9AS9sUiWyBDpV4decgG61GthjEsBH1NC6xaWwy4_hCWpAIk6f1msqJNVuc_znFsenD7pZWDvjHSPRYjecfhyA7FKeVUPn87Ik7mZWtEeewW8cETsvcaE0oTooHdzLYx-ZQe072VR7_LhpM9e5v59S09Xsn0Plb1OPrGFuf8H_x-TASSQbeQh5CUpP9rgwa2uSgZaSwq4sLvnmUUKSJKFfQmwhOFxd1pVPGxD75YqH1psPpl0bxMjEvS7tPuFkwV1xQ9ybTKAYrcjl09E',
      }
    };

    axios(config)
      .then(function (response: any) {
        console.log(response.data);
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
