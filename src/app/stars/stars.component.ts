import { Component, OnInit,Output,Input,EventEmitter,OnChanges } from '@angular/core';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.styl']
})
export class StarsComponent implements OnInit,OnChanges {
  stars: boolean[] = []
  @Output() private ratingChange:EventEmitter<number> = new EventEmitter()
  @Input() rating: number = 0
  @Input()
  private readonly:boolean = true
  clickStar(index:number){
    if(this.readonly){
      return
    }
    this.rating = index+1;
    this.ngOnInit()
    this.ratingChange.emit(this.rating)
  }
  ngOnChanges(changes): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.stars = []
    var stars = Math.floor(this.rating)
    var emptystars = 5 - stars
    console.log(stars, emptystars)
    for (var i = 0; i < stars; i++) {
      this.stars.push(false)
    }
    for (var i = 0; i < emptystars; i++) {
      this.stars.push(true)
    }
  }
  constructor() { }

  ngOnInit() {
    

  }

}
