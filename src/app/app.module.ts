import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppFoodListComponent } from './app-food-list/app-food-list.component';
import { HeaderComponent } from './header/header.component';

import { SearcherPipe } from './pipes/searcher.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppFoodListComponent,
    HeaderComponent,
    SearcherPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
