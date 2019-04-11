import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [new Product(0, 'iPhone', 5899, '最新款iphone', 3),
  new Product(1, 'iPhone', 5899, '最新款iphone', 3),
  new Product(2, 'sumsung7', 6888, 'sumsungGalaxy7', 3),
  new Product(3, 'iPhone', 5899, '最新款iphone', 3),
  new Product(4, 'iPhone', 5899, '最新款iphone', 3),
  new Product(5, 'iPhone', 5899, '最新款iphone', 3),
  ]
  private comments:Comment[] = [
    new Comment(1,1,'2017-1-1 22:22:22',"这个商品不错",'王菲',3),
    new Comment(2,4,'2017-1-1 22:22:22',"这个商品不错",'吴亦凡',4),
    new Comment(1,2,'2017-1-1 22:22:22',"这个商品不错",'王菲',3),
    new Comment(3,2,'2017-1-1 22:22:22',"这个商品不错",'张学友',3),
    new Comment(1,1,'2017-1-1 22:22:22',"这个商品不错",'王菲',2),
    new Comment(1,3,'2017-1-1 22:22:22',"这个商品不错",'王菲',5),
  ]
  getProduct() {
    return this.products
  }
  getSingleProduct(id: number):Product {
    return this.products.find((product) => product.id === id)
  }
  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=>comment.productId === id)
  }
  constructor(

  ) { }
}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string,
    public rating: number
  ) {
  }
}
export class Comment{
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public content:string,
    public user:string,
    public rating:number){

  }
}
