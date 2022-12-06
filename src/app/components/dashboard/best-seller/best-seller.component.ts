import { Component, OnInit } from '@angular/core';
import { BestSellerProduct } from 'src/app/models/dashboard/best-seller-product.model';
import { BestSellerService } from 'src/app/services/dashboard/best-seller.service';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent implements OnInit {
  public chart: any
  articulos: BestSellerProduct[] = [];
  barcodes: String[] = [];
  vendidos: String[] = [];

  constructor(private bestSellerService: BestSellerService) { }

  ngOnInit(): void {
    this.retrieveBestSellers();
    // this.createChart();
  }

  retrieveBestSellers(): void {
    var axios = require('axios');
    var data = '';

    var config = {
      method: 'get',
      url: 'https://localhost:8004/api/venta/best-sellers',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJBUFAgUFdBIEFOR1VMQVIgLyBTUFJJTkcgQk9PVCIsImp0aSI6IjEiLCJzdWIiOiJ3d3cudmFsaWRhbmRvLXRva2VuLXB3YS5jb20iLCJhdXRob3JpdGllcyI6WyJBRE1JTiJdLCJuYW1lIjoiQWRtQ2xhdWRpYSIsImVtYWlsIjoiYWRtaW4uY2xhdWRpYUBtYWlsLmNvbSIsInJvbCI6IkFETUlOIiwiaWF0IjoxNjcwMjY5OTExLCJleHAiOjE2NzAyNzE3MTF9.V8Aiem-DsNoQPJKh8sdgzrmA2d7co2SvQIYWPs--42pROVxLpc5_WBMwcXYCoawo_yHOiO1PGw5RjmCfNMRTWozo_qWA6qx1fMnVomuWxdVrwZsv10qtdce5yD266PisXqK14JIXuKFfqgFMfQkqBJWb1VIteC4r8RXFLXf-cIKauNb4ZvxZksv_SlYeYhc3ss_JTkC6h5cuPGFGEm7c9ibN7Rtw0kv4bQodW8zO18AV-B0v-6fathwaqBkRRBPPtcPBKXEiTye-LYYW2t8nN1KaHJKzLgoUDMfIp6haMaGNZGKL-ou2KSORccBNhx87RSWXR7T_za-lTQIHk2zQ-uxrdsrEuhWEYdSJ6T_KBxlj2_tm_ScC20_AEF25vPX-MXlifny2EGDduDNQaVnDAieNqVh3JQ2-oy_ivQCnQoBXLwyAnqBaUtlbSwRu-3QXL6tFaZ0OJImBg7gmx3TvccSAUlG6ZJC5lfzoH3_NY5zeSVmBYGfvTR75RSvpK40iosTClw0qS5k-LDaSuZKiRpaxKkPwVPfbiydK0WHfS06TSKAuAsqgOTRAQ0pjha7Ox6q6ayb4_27QeWAEozDQkBDZQWaNitXziT_gUFb2GEpnEQU9XmVAKrI5qsBZF99ENCOom9ntzm2LEucz_oHAwY4883ISU12DqbVSZHNbVnU',
        // 'Cookie': 'JSESSIONID=292A571B1C24A23E50FADB2DFD380F7F'
      },
      data: data
    };

    axios(config)
      .then((response: any) => {
        this.articulos = response.data;
        this.articulos.forEach((bestSeller: any) => {
          this.barcodes.push(String(bestSeller.barcode))
          this.vendidos.push(String(bestSeller.vendidos))
        });

        this.chart = new Chart("ChartBestSellers", {
          type: 'bar', //this denotes tha type of chart

          data: {// values on X-Axis
            labels: this.barcodes,
            datasets: [
              {
                label: "Sales",
                data: this.vendidos,
                backgroundColor: 'blue'
              }
            ]
          },
          options: {
            aspectRatio: 1
          }

        });
      })
      .catch(function (error: any) {
        console.log(error);
      });


    // this.bestSellerService.getBestSellers()
    //   .subscribe({
    // next: (response) => {
    // this.articulos = response;
    // this.articulos.forEach(bestSeller => {
    //   console.log(bestSeller)
    //   console.log('--------')

    //   this.barcodes.push(String(bestSeller.barcode))
    //   this.vendidos.push(String(bestSeller.vendidos))
    // });

    // this.chart = new Chart("ChartBestSellers", {
    //   type: 'bar', //this denotes tha type of chart

    //   data: {// values on X-Axis
    //     labels: this.barcodes,
    //     datasets: [
    //       {
    //         label: "Sales",
    //         data: this.vendidos,
    //         backgroundColor: 'blue'
    //       }
    //     ]
    //   },
    //   options: {
    //     aspectRatio: 1
    //   }

    // });
    // console.log(this.articulos)
    //   },
    //   error: (error) => {
    //     console.log(error);

    //   },
    //   complete: () => console.info('complete')
    // });


  }
}
