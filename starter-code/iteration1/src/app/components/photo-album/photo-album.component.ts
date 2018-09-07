import { Component, OnInit } from '@angular/core';
import { Slide } from '../../shared/models/slide.model';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css']
})
export class PhotoAlbumComponent {
  slides: Array<Object> = [
    {
      image: 'https://loremflickr.com/320/240/kitten', 
      description: 'Ironhack Madrid'
    },
    {
      image: 'https://loremflickr.com/320/240/cat', 
      description: 'Ironhack Barcelona'
    }, 
    {
      image: 'https://loremflickr.com/320/240/pur', 
      description: 'Ironhack Miami'
    }
  ]; 
}
