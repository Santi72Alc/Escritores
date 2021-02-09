import { Component, OnInit } from '@angular/core';
import { Escritor } from 'src/app/models/escritor.model';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  escritor: Escritor;
  showLibros: Boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private escritorSrv: EscritoresService
  ) {
this.showLibros = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      const { escritorId } = params;
      this.escritor = await this.escritorSrv.getById(parseInt(escritorId));
    });
  }

  onclick(): void {
    this.showLibros = !this.showLibros;
  }
}
