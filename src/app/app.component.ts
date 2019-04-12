import { Component,OnInit,AfterContentInit,AfterViewInit,AfterContentChecked } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit,AfterContentInit,AfterViewInit,AfterContentChecked{
  title = 'stock-app';
  test(){
    console.log($('body'))
  }
  ngOnInit(){
    this.test()
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('父组件内容投影完毕')
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("父组件投影内容变更检测完毕")
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("父组件试图内容初始化完毕")
  }
}
