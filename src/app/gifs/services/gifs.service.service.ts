import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private _tagHistory : string[] = []
  private api_key: string = 'KyWFqK9l4XB16x4yR6b35vmsiV07W4od'
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'
  constructor( private http: HttpClient) { }

  get tagsHistory(){
    return [...this._tagHistory]
  }

  searchTag (tag : string): void{
    if(tag.length ===0) return

    this.organizeHistory(tag)

    const params = new HttpParams()
    .set('api_key', this.api_key)
    .set('limit', 10)
    .set('q', tag)


    this.http.get(`${this.serviceUrl}/search`, {params})
    .subscribe( resp => console.log(resp))

  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase()
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter(oldTag => oldTag!==tag )
    }
    this._tagHistory.unshift(tag)
    this._tagHistory = this._tagHistory.splice(0,10)
  }

}
