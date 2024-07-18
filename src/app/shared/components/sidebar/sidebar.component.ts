import { GifsServiceService } from './../../../gifs/services/gifs.service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifService:GifsServiceService){ }

  get tags(){
    return this.gifService.tagsHistory
  }
}
