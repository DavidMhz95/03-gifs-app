import { GifsService } from './../../../gifs/services/gifs.service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifService:GifsService){ }

  get tags(){
    return this.gifService.tagsHistory
  }


  public navigateAgain(tag:string){
    this.gifService.searchTag(tag)
  }
}
