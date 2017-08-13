import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products:Product[];
  productIdCount:number;

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

  delete(product){
    for(let i = 0; i < this.products.length; i++){
      if(product.id == this.products[i].id){
        this.products.splice(i,1);
      }
    }
    this._products.updateProducts(this.products, this.productIdCount);
  }

  edit(product){
    this._router.navigate(['/products/edit', product.id]);
  }

}
