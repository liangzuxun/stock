import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
  new Product(0, '第一个商品', 5899, '最新款iphone', 3,['图书']),
  new Product(1, '第二个商品', 6888, 'sumsungGalaxy7', 3,['硬件设备']),
  new Product(2, '第三个商品', 5899, '最新款硬盘', 3,['电子产品','硬件设备']),
  new Product(3, '第四个商品', 5899, '最新款iprd', 3,['电子产品']),
  new Product(4, '第五个商品', 5899, '新书', 3,['图书']),
  new Product(5, '第六个商品', 5899, '最新款imac', 3,['电子产品','硬件设备']),
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
  getAllTypes():string[]{
    return ['电子产品','硬件设备','图书']
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
    public rating: number,
    public types:any[]
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
export class ProductTypes{
  constructor(

  ){

  }
}