import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable()
export class KebabService {
  constructor(private http: HttpClient) {}

    getKebabs() {
      return this.http.get('http://localhost:3000/kebabList');
    }
    addKebab(kebabName: string, kebabPrice: number) {
      const data = {
        name: kebabName,
        price: kebabPrice
      };
      return this.http.post('http://localhost:3000/kebabList', data);
    }

}
