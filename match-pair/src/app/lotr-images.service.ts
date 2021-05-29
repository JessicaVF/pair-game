import { Injectable } from '@angular/core';
import { imgLotr } from './model/img.model';

@Injectable({
  providedIn: 'root'
})
export class LotrImagesService {

  constructor() { }

  imageTbl: imgLotr[]=[
    new imgLotr( 1,"lotr_dwarve.jpg", "default"),
    new imgLotr( 2, "lotr_elf.jpg", "default"),
    new imgLotr( 3, "lotr_gollum.jpg", "default"),
    new imgLotr( 4, "lotr_human.jpg", "default"),
    new imgLotr( 5, "lotr_king.jpg", "default"),
    new imgLotr( 6, "lotr_wizard.jpg", "default"),
    new imgLotr( 7, "lotr-hobbit1-sw.jpg", "default"),
    new imgLotr( 8, "lotr-hobbit2-fb.jpg", "default"),
    new imgLotr( 9, "lotr-hobbit3.jpg", "default"),
    new imgLotr( 10, "lotr-hobbit4.jpg", "default"),
  ]
}
