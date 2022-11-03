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
    this.bestSellerService.getBestSellers()
      .subscribe({
        next: (response) => {
          this.articulos = response;
          this.articulos.forEach(bestSeller => {
            this.barcodes.push(String(bestSeller.barcode))
            this.vendidos.push(String(bestSeller.vendidos))
            // vendidos
          });
          console.log(this.barcodes)
          console.log(this.vendidos)

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
          // console.log(this.articulos)
        },
        error: (error) => {
          console.log(error);

        },
        complete: () => console.info('complete')
      });

    
  }
}
