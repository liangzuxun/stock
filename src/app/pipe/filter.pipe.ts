import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], filterFeild: string,keyword:string): any {  
  if(!filterFeild||!keyword){
    return list
  }
  return list.filter((item)=>{
     let itemValue = item[filterFeild].toLowerCase()
     return itemValue.indexOf(keyword.toLowerCase())>=0
  })
  }

}
