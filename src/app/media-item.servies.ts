import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class mediaItemService{
  constructor(private http:HttpClient){}

  getData(){

  }
    mediaItems=[
        {
          id:1,
          name:'Breaking Bad',
          medium:'Series',
          category:'Drama',
          year: 2008,
          watchedOn: 19062019,
          isFavorite: true
        },
        {
          id:2,
          name:'Interstellar',
          medium:'Movies',
          category:'Science Fiction',
          year: 2014,
          watchedOn: 19062019,
          isFavorite: false
        },
        
        {
          id:3,
          name:'The Truman Show',
          medium:'Movies',
          category:'Science Fiction',
          year: 1998,
          watchedOn: 19062019,
          isFavorite: true
        },
        {
          id:4,
          name:'The Watchmen',
          medium:'Movies',
          category:'Science Fiction',
          year: 2009,
          watchedOn: 19062019,
          isFavorite: false
        },
        {
          id:5,
          name:'How I Met Your Mother',
          medium:'Series',
          category:'Rom-Com',
          year: 2005,
          watchedOn: 19062019,
          isFavorite: false
        }
        
    ];
    get(){
        return this.mediaItems;
    }
    add(mediaItem){
        this.mediaItems.push(mediaItem);
    }
    delete(mediaItem){
        const index=this.mediaItems.indexOf(mediaItem);
        if(index>=0){
            this.mediaItems.splice(index,1);
        }
    }
}