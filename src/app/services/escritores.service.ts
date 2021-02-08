import { Injectable } from '@angular/core';

import { ESCRITORES } from '../db/escritores.db';
import { Escritor } from '../models/escritor.model';

@Injectable({
  providedIn: 'root',
})
export class EscritoresService {
  constructor() {}

  // BASIC Get All Escritores -- DON'T USE
  getAll(): Escritor[] {
    return ESCRITORES;
  }

  // Get All Escritores
  getAllPromise(): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  // Get ALL Escritores by Pais
  getByPais(pPais: String): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      const escritoresSelected: Escritor[] = ESCRITORES.filter((escritor) => {
        return escritor.pais === pPais;
      });
      resolve(escritoresSelected);
    });
  }

  // Get ONE Escritor by Id
  getById(pId: Number): Promise<Escritor> {
    return new Promise((resolve, reject) => {
      const escritorFound = ESCRITORES.find((escritor) => {
        return escritor.id === pId;
      });
      resolve(escritorFound);
    });
  }
} /* End class */
