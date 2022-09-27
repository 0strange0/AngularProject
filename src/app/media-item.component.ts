import { isNgTemplate } from "@angular/compiler";
import { Component,Input, Output, EventEmitter , HostListener } from "@angular/core";

@Component({
    selector: 'mw-media-item',
    templateUrl:'./media-item.component.html',
    styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent{
    @Input() mediaItem;
    @Output() delete=new EventEmitter();

    
    onDelete(){
        console.log("Deleted");
        this.delete.emit(this.mediaItem);
    }
    
}
