import { Injectable } from '@angular/core';
import { imgLotr } from './model/img.model';

@Injectable({
  providedIn: 'root'
})
export class LotrImagesService {

  constructor() { }

  imageTbl: imgLotr[]=[
    new imgLotr( 1,"lotr_dwarve.jpg"),
    new imgLotr( 2, "lotr_elf.jpg"),
    new imgLotr( 3, "lotr_gollum.jpg"),
    new imgLotr( 4, "lotr_human.jpg"),
    new imgLotr( 5, "lotr_king.jpg"),
    new imgLotr( 6, "lotr_wizard.jpg"),
    new imgLotr( 7, "lotr-hobbit1-sw.jpg"),
    new imgLotr( 8, "lotr-hobbit2-fb.jpg"),
    new imgLotr( 9, "lotr-hobbit3.jpg"),
    new imgLotr( 10, "lotr-hobbit4.jpg"),
  ]
}
