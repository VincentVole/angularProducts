import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  products:Product[];
  productIdCount:number;
  product:Product;

  constructor(private _router:Router, private _products:ProductsService, private _route:ActivatedRoute) {
  	this._products.productsObservable.subscribe((products)=>{
  	  this.products = products;
  	})
    this._products.counterObservable.subscribe((counter)=>{
      this.productIdCount = counter;
    })

    this._route.params.subscribe((params)=>{
    	for(let i = 0; i < this.products.length; i++){
    		if(this.products[i].id == params.id){
    			this.product = this.products[i];
    		}
    	}
    })
  }

  ngOnInit() {
  }


  submit(){
  	this._products.updateProducts(this.products, this.productIdCount);
  	this._router.navigate(['/products']);
  }
}
