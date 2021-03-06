import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class CityProvider {

  constructor(
    public storage: Storage,
  ) {}

  // Retorna o código das cidades salvas no storage
  getCityList(): Promise <number[]> {
    let cityCodes: number[] = [];

    return this.storage.forEach((city) => {
      cityCodes.push(city);
    })
    .then(() => cityCodes);
  }

  //Pega uma cidade no storage pelo código
  getByCode(cityCode: number): Promise <number[]> {
    return this.storage.get(`cities.${cityCode}`);
  }

  //Salva o código de uma cidade no storage
  save(cityCode: number): Promise <boolean> { // Pode ser utilizado tanto para salvar uma cidade nova quanto atualizar.
    return this.storage.set(`cities.${cityCode}`, cityCode)
    .then(() => true)
    .catch(() => false);
  }

  //Remove o código de uma cidade do storage
  delete(cityCode: number): Promise <boolean> {
    return this.storage.remove(`cities.${cityCode}`)
    .then(() => true)
    .catch(() => false);
  }
}

