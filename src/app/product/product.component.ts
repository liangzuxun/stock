import { Component, OnInit } from '@angular/core';
import{ProductService} from '../service/product.service'
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.styl']
})
export class ProductComponent implements OnInit {
   products:any[]=[];
  keyword:string="";
  private filterArray:any[] = []
  titleFilter:FormControl = new FormControl('')
  constructor(private proSer:ProductService) {
   }
  ngOnInit() {
    this.products=this.proSer.getProduct()
    // this.filterArray = this.filterList(this.products,this.keyword)
    this.titleFilter.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((value)=>{
      this.keyword = value
      // console.log(this.keyword)
      // this.filterArray = this.filterList(this.products,this.keyword)
    })
  }
  // filterList(list:any[],keyword:string){
  //   if(!keyword){
  //     return list
  //   }
  //     return list.filter((item)=>{
  //        let itemValue = item['title']
  //        return itemValue.indexOf(keyword)>=0
  //     })
  // }

}
