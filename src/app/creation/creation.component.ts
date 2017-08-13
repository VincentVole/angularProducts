import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service'
import { Product } from '../product';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  productIdCount:number;
  products: Product[];
  newProduct = {
    title: '',
    price: '',
    url: ''
  }

  constructor(private _router:Router, private _products:ProductsService) { 
    this._products.productsObservable.subscribe((products)=>{
      this.products = products;
    })
    this._products.counterObservable.subscribe((counter)=>{
      this.productIdCount = counter;
    })

  }

  ngOnInit() {
  }

  submit(){
    // this.products.push(new Product('pizza', 9.99, ''));
    // this.products[0].id = this.productIdCount;
    // this.productIdCount++;

    // this.products.push(new Product('fries', 4.99, ''));
    // this.products[1].id = this.productIdCount;
    // this.productIdCount++;

    this.products.push(new Product(this.newProduct.title, this.newProduct.price, this.newProduct.url));
    this.products[this.products.length - 1].id = this.productIdCount;
    this.productIdCount++;


    this._products.updateProducts(this.products, this.productIdCount);
  	this._router.navigate(['/products']);
  }

}
