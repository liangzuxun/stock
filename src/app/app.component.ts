import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit{
  title = 'stock-app';
  test(){
    console.log($('body'))
  }
  ngOnInit(){
    this.test()
  }
}