import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Articulo } from 'src/app/models/articulo/articulo.model';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-articulo',
  templateUrl: './add-articulo.component.html',
  styleUrls: ['./add-articulo.component.scss'],
})

export class AddArticuloComponent implements OnInit {
  articulo: Articulo = {
    cod_Barras: "998877665544",
    descripcion_Corta: "Paletón de Cajeta  10/14g Cor",
    articulo_Disponible: "1",
    last_Update_Inventory: "2020-02-24 17:29:27.483",
    stock_Min: "0.000",
    descripcion: "chocolate",
    precio_Venta: "12.300",
    stock_Max: "0.000",
    cantidad_Um: "1.000",
    precio_Compra: "10.230",
    utilidad: "20.235",
    tipo_Articulo: "principal",
    stock: "0.000",
    kit: "0",
    iva: "0.00",
    visible: "0",
    cve_Producto: "50161813",
    puntos: "0",
    cod_nterno: null,
    cod_Asociado: null,
    fecha_Registro: "2022-10-17 13:29:27.483",
    kit_Fecha_Ini: null,
    kit_Fecha_Fin: null,
    activo: 1,
    id_Clasificacion: 237,
    id_Unidad: "B6988452-9179-46F4-B97B-D44611EB5F18",
    id_Proveedor: "93499BBB-944B-4914-A614-37E127AD8ED4",
  };
  // articulo: Articulo = {
  //   cod_Barras: '',
  //   descripcion_Corta: '',
  //   id_Clasificacion: '',
  //   articulo_Disponible: '',
  //   last_Update_Inventory: '',
  //   stock_Min: '',
  //   cod_nterno: '',
  //   descripcion: '',
  //   precio_Venta: '',
  //   stock_Max: '',
  //   cantidad_Um: '',
  //   precio_Compra: '',
  //   utilidad: '',
  //   cod_Asociado: '',
  //   id_Unidad: '',
  //   id_Proveedor: '',
  //   tipo_Articulo: '',
  //   stock: '',
  //   kit: '',
  //   iva: '',
  //   activo: '',
  //   kit_Fecha_Ini: '',
  //   visible: '',
  //   fecha_Registro: '',
  //   kit_Fecha_Fin: '',
  //   cve_Producto: '',
  //   puntos: ''
  // };
  submitted = false;
  // addStyle: string;
  message = '';

  constructor(private ArticuloService: ArticuloService, private httpClient: HttpClient) {
    // this.addStyle = '/assets/addStyle.css';
  }

  ngOnInit(): void {
  }

  saveArticulo(event: any): void {

    const data = {
      cod_Barras: this.articulo.cod_Barras,
      descripcion_Corta: this.articulo.descripcion_Corta,
      articulo_Disponible: this.articulo.articulo_Disponible,

      last_Update_Inventory: "2020-02-24 17:29:27.483",

      stock_Min: this.articulo.stock_Min,
      descripcion: this.articulo.descripcion,
      precio_Venta: this.articulo.precio_Venta,
      stock_Max: this.articulo.stock_Max,
      cantidad_Um: this.articulo.cantidad_Um,
      precio_Compra: this.articulo.precio_Compra,

      utilidad: "20.235",

      tipo_Articulo: this.articulo.tipo_Articulo,
      stock: this.articulo.stock,

      kit: "0",

      iva: this.articulo.iva,
      visible: this.articulo.visible,
      cve_Producto: this.articulo.cve_Producto,
      puntos: this.articulo.puntos,

      cod_nterno: null,
      cod_Asociado: null,
      fecha_Registro: "2022-10-17 13:29:27.483",
      kit_Fecha_Ini: null,
      kit_Fecha_Fin: null,
      activo: 1,
      id_Clasificacion: 237,
      id_Unidad: "B6988452-9179-46F4-B97B-D44611EB5F18",
      id_Proveedor: "93499BBB-944B-4914-A614-37E127AD8ED4",
      // fecha_Registro: this.articulo.fecha_Registro,
      // cod_nterno: this.articulo.cod_nterno,
      // cod_Asociado: this.articulo.cod_Asociado,
      // kit_Fecha_Ini: this.articulo.kit_Fecha_Ini,
      // kit_Fecha_Fin: this.articulo.kit_Fecha_Fin,
      // activo: this.articulo.activo,
      // id_Clasificacion: this.articulo.id_Clasificacion,
      // id_Unidad: this.articulo.id_Unidad,
      // id_Proveedor: this.articulo.id_Proveedor,
    };

    const data_default = {
      cod_Barras: "998877665544",
      descripcion_Corta: "Paletón de Cajeta  10/14g Cor",
      articulo_Disponible: "1",
      last_Update_Inventory: "2020-02-24 17:29:27.483",
      stock_Min: "0.000",
      descripcion: "chocolate",
      precio_Venta: "12.300",
      stock_Max: "0.000",
      cantidad_Um: "1.000",
      precio_Compra: "10.230",
      utilidad: "20.235",
      tipo_Articulo: "principal",
      stock: "0.000",
      kit: "0",
      iva: "0.00",
      visible: "0",
      cve_Producto: "50161813",
      puntos: "0",
      cod_nterno: null,
      cod_Asociado: null,
      fecha_Registro: "2022-10-17 13:29:27.483",
      kit_Fecha_Ini: null,
      kit_Fecha_Fin: null,
      activo: 1,
      id_Clasificacion: 237,
      id_Unidad: "B6988452-9179-46F4-B97B-D44611EB5F18",
      id_Proveedor: "93499BBB-944B-4914-A614-37E127AD8ED4",
    };

    console.log(data)
    console.log(data_default)

    this.ArticuloService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });

      event.preventDefault();
  }

  newArticulo(): void {
    this.submitted = false;
    this.articulo = {
      cod_Barras: '',
      descripcion_Corta: '',
      id_Clasificacion: '',
      articulo_Disponible: '',
      last_Update_Inventory: '',
      stock_Min: '',
      cod_nterno: '',
      descripcion: '',
      precio_Venta: '',
      stock_Max: '',
      cantidad_Um: '',
      precio_Compra: '',
      utilidad: '',
      cod_Asociado: '',
      id_Unidad: '',
      id_Proveedor: '',
      tipo_Articulo: '',
      stock: '',
      kit: '',
      iva: '',
      activo: '',
      kit_Fecha_Ini: '',
      visible: '',
      fecha_Registro: '',
      kit_Fecha_Fin: '',
      cve_Producto: '',
      puntos: ''
    };
  }
}