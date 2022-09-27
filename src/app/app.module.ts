import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import {CommonModule} from "@angular/common"
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemFormComponent } from './media-item-form.component';
import { routing } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemFormComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
