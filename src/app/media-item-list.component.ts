import { Component, OnInit } from "@angular/core";
import { mediaItemService } from "./media-item.servies";

@Component({
    selector: 'mw-media-item-list',
    templateUrl: './media-item-list.component.html',
    styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit{
  mediaItems;


    constructor(private mediaItemService: mediaItemService){}

    ngOnInit(){
        this.mediaItems=this.mediaItemService.get();
    }

    onMediaItemDelete(mediaItem){
        this.mediaItemService.delete(mediaItem)
    }
}