import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {map} from 'rxjs/operators'
import {ProductService} from '../service/product.service'
import {Product,Comment} from '../service/product.service'

 
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.styl'],
})
export class ProductDetailComponent implements OnInit {
  productId:number
  singleProduct:Product;
  comments:Comment[]
  newRating:number = 5;
  newComment:string = ''
  isHiddenComment = true
  constructor(private route:ActivatedRoute,private Router:Router,private proSer:ProductService) {

   }
   calAverageRating(){
     let sum =  this.comments.reduce((sum,comment)=>sum+comment.rating,0)
     console.log(sum)
     let averageRat = sum /this.comments.length
     this.singleProduct.rating = Math.floor(averageRat*100)/100
   }
   addComment(){
     let comment = new Comment(0,this.productId,"2018-1-1,22:23:12",this.newComment,"张飞",this.newRating)
     this.comments.push(comment)
     this.newComment =""
     this.newRating = 5
     this.isHiddenComment = true
     this.calAverageRating()
   }
  ngOnInit() {

   this.productId = this.route.snapshot.params['productId']
   this.singleProduct = this.proSer.getSingleProduct(Number(this.productId))
   console.log(this.singleProduct)
   this.comments = this.proSer.getCommentsForProductId(Number(this.productId))
   console.log(this.comments)
   this.calAverageRating()
  }

}
