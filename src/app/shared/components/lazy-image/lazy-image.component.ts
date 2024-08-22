import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  ngOnInit(): void {
    if(!this.url) throw Error('Url property is Required')
    if(!this.alt) throw Error('Alt property is Required')
  }

  @Input()
  public url!: string

  @Input()
  public alt!: string

  public hasLoaded:boolean = false


  onLoad(){
    setTimeout(() => {
      this.hasLoaded = true
    }, 1000);

  }

}
