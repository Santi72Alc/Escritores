import { Component, OnInit } from '@angular/core';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css'],
})
export class ListaEscritoresComponent implements OnInit {
  arrEscritores: Escritor[];

  constructor(private escritoresSrv: EscritoresService) {}

  async ngOnInit() {
    /*
    this.escritoresService.getAllPromise()
      .then((escritores) => {
        this.arrEscritores = escritores;
      });
    */
    this.arrEscritores = await this.escritoresSrv.getAllPromise();
  }

  // Select Pais
  async onChange($event) {
    const { value } = $event.target;

    if (value === 'todos') {
      this.arrEscritores = await this.escritoresSrv.getAllPromise();
    } else {
      this.arrEscritores = await this.escritoresSrv.getByPais(value);
    }
  }
}
