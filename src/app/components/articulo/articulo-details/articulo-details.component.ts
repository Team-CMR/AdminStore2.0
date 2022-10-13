import { Component, Input, OnInit } from '@angular/core';

import { Articulo } from 'src/app/models/articulo/articulo.model';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articulo-details',
  templateUrl: './articulo-details.component.html',
  styleUrls: ['./articulo-details.component.scss']
})
export class ArticuloDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentArticulo: Articulo = {
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

  message = '';

  constructor(
    private articuloService: ArticuloService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getArticulo(this.route.snapshot.params["cod_barras"]);
    }
  }

  getArticulo(cod_barras: string): void {
    this.articuloService.get(cod_barras)
      .subscribe({
        next: (data) => {
          this.currentArticulo = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateActived(status: boolean): void {
    let newStatus = '';
    if (this.currentArticulo.activo == '0') {
      newStatus = '1';
    } else {
      newStatus = '0';
    }

    const data = {
      cod_Barras: this.currentArticulo.cod_Barras,
      descripcion_Corta: this.currentArticulo.descripcion_Corta,
      id_Clasificacion: this.currentArticulo.id_Clasificacion,
      articulo_Disponible: this.currentArticulo.articulo_Disponible,
      last_Update_Inventory: this.currentArticulo.last_Update_Inventory,
      stock_Min: this.currentArticulo.stock_Min,
      cod_nterno: this.currentArticulo.cod_nterno,
      descripcion: this.currentArticulo.descripcion,
      precio_Venta: this.currentArticulo.precio_Venta,
      stock_Max: this.currentArticulo.stock_Max,
      cantidad_Um: this.currentArticulo.cantidad_Um,
      precio_Compra: this.currentArticulo.precio_Compra,
      utilidad: this.currentArticulo.utilidad,
      cod_Asociado: this.currentArticulo.cod_Asociado,
      id_Unidad: this.currentArticulo.id_Unidad,
      id_Proveedor: this.currentArticulo.id_Proveedor,
      tipo_Articulo: this.currentArticulo.tipo_Articulo,
      stock: this.currentArticulo.stock,
      kit: this.currentArticulo.kit,
      iva: this.currentArticulo.iva,
      activo: newStatus,
      kit_Fecha_Ini: this.currentArticulo.kit_Fecha_Ini,
      visible: this.currentArticulo.visible,
      fecha_Registro: this.currentArticulo.fecha_Registro,
      kit_Fecha_Fin: this.currentArticulo.kit_Fecha_Fin,
      cve_Producto: this.currentArticulo.cve_Producto,
      puntos: this.currentArticulo.puntos,
    };

    this.message = '';

    this.articuloService.update(this.currentArticulo.cod_Barras, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          // this.currentArticulo.cod_Barras = cod_Barras;
          // this.currentArticulo.descripcion_Corta = descripcion_Corta;
          // this.currentArticulo.id_Clasificacion = id_Clasificacion;
          // this.currentArticulo.articulo_Disponible = articulo_Disponible;
          // this.currentArticulo.last_Update_Inventory = last_Update_Inventory;
          // this.currentArticulo.stock_Min = stock_Min;
          // this.currentArticulo.cod_nterno = cod_nterno;
          // this.currentArticulo.descripcion = descripcion;
          // this.currentArticulo.precio_Venta = precio_Venta;
          // this.currentArticulo.stock_Max = stock_Max;
          // this.currentArticulo.cantidad_Um = cantidad_Um;
          // this.currentArticulo.precio_Compra = precio_Compra;
          // this.currentArticulo.utilidad = utilidad;
          // this.currentArticulo.cod_Asociado = cod_Asociado;
          // this.currentArticulo.id_Unidad = id_Unidad;
          // this.currentArticulo.id_Proveedor = id_Proveedor;
          // this.currentArticulo.tipo_Articulo = tipo_Articulo;
          // this.currentArticulo.stock = stock;
          // this.currentArticulo.kit = kit;
          // this.currentArticulo.iva = iva;
          // newStatus = activo;
          // this.currentArticulo.kit_Fecha_Ini = kit_Fecha_Ini;
          // this.currentArticulo.visible = visible;
          // this.currentArticulo.fecha_Registro = fecha_Registro;
          // this.currentArticulo.kit_Fecha_Fin = kit_Fecha_Fin;
          // this.currentArticulo.cve_Producto = cve_Producto;
          // this.currentArticulo.puntos = puntos;

          this.message = res.message ? res.message : 'Status active changed!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(): void {
    this.message = '';

    this.articuloService.update(this.currentArticulo.cod_Barras, this.currentArticulo)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Articulo was updated!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.articuloService.delete(this.currentArticulo.cod_Barras)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/articulos']);
        },
        error: (e) => console.error(e)
      });
  }

}
