import { Component, OnInit } from '@angular/core';

import { Articulo } from 'src/app/models/articulo/articulo.model';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-add-articulo',
  templateUrl: './add-articulo.component.html',
  styleUrls: ['./add-articulo.component.scss']
})
export class AddArticuloComponent implements OnInit {

  articulo: Articulo = {
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
  submitted = false;

  constructor(private ArticuloService: ArticuloService) { }

  ngOnInit(): void {
  }

  saveArticulo(): void {
    const data = {
      cod_Barras: this.articulo.cod_Barras,
      descripcion_Corta: this.articulo.descripcion_Corta,
      id_Clasificacion: this.articulo.id_Clasificacion,
      articulo_Disponible: this.articulo.articulo_Disponible,
      last_Update_Inventory: this.articulo.last_Update_Inventory,
      stock_Min: this.articulo.stock_Min,
      cod_nterno: this.articulo.cod_nterno,
      descripcion: this.articulo.descripcion,
      precio_Venta: this.articulo.precio_Venta,
      stock_Max: this.articulo.stock_Max,
      cantidad_Um: this.articulo.cantidad_Um,
      precio_Compra: this.articulo.precio_Compra,
      utilidad: this.articulo.utilidad,
      cod_Asociado: this.articulo.cod_Asociado,
      id_Unidad: this.articulo.id_Unidad,
      id_Proveedor: this.articulo.id_Proveedor,
      tipo_Articulo: this.articulo.tipo_Articulo,
      stock: this.articulo.stock,
      kit: this.articulo.kit,
      iva: this.articulo.iva,
      activo: this.articulo.activo,
      kit_Fecha_Ini: this.articulo.kit_Fecha_Ini,
      visible: this.articulo.visible,
      fecha_Registro: this.articulo.fecha_Registro,
      kit_Fecha_Fin: this.articulo.kit_Fecha_Fin,
      cve_Producto: this.articulo.cve_Producto,
      puntos: this.articulo.puntos
    };

    this.ArticuloService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
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
