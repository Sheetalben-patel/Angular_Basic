import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfavourite-app';
  post = {
    title: "Title",
    isFavourite: true
  }

  onFavouriteChanged(){
    console.log("Favourite Changed ");
  }
}




#dhshdjs