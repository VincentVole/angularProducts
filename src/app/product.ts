export class Product {
	id:number;
	title:string;
	price:number;
	url:string;
	constructor(title, price, url){
		this.id = -1;
		this.title = title;
		this.price = price;
		this.url = url;
	}
}