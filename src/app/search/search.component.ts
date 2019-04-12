import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service'
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {
  // hero={name:'123'}
  formModel:FormGroup  = this.fb.group({
    'title':['',Validators.minLength(3)],
    'price':[null,this.positiveNumberValidator],
    'type':['-1']
  })
  types:any[]= []
  constructor(private fb:FormBuilder,private proSer:ProductService) { }

  ngOnInit() {
    this.types = this.proSer.getAllTypes()
  }
  onSearch(){
    if(this.formModel.valid&&this.formModel.dirty){
      console.log(this.formModel.value)
    }
  }
  get title(){
    // console.log(this.formModel.get('title').hasError('minlength'))
    return this.formModel.get('title')
  }
  get price(){
    return this.formModel.get('price')
  }
  positiveNumberValidator(control:FormControl):any{
    if(!control.value){
      return null
    }
    let price = parseInt(control.value)
    if(price>0){
      return null
    }else{
      return {positiveNumber:true}
    }
  }

}
