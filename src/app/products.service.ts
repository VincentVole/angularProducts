import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductsService {

  productsObservable = new BehaviorSubject([]);
  counterObservable = new BehaviorSubject(1);

  constructor() { 
  }

  updateProducts(products, counter){
  	this.productsObservable.next(products);
  	this.counterObservable.next(counter);
  }

}
