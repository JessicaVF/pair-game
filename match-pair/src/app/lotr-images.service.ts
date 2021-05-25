import { Injectable } from '@angular/core';
import { imgLotr } from './model/img.model';

@Injectable({
  providedIn: 'root'
})
export class LotrImagesService {

  constructor() { }

  imageTbl: imgLotr[]=[
    new imgLotr( "lotr_dwarve.jpg"),
    new imgLotr( "lotr_elf.jpg"),
    new imgLotr( "lotr_gollum.jpg"),
    new imgLotr( "lotr_human.jpg"),
    new imgLotr( "lotr_king.jpg"),
    new imgLotr( "lotr_wizard.jpg"),
    new imgLotr( "lotr-hobbit1-sw.jpg"),
    new imgLotr( "lotr-hobbit2-fb.jpg"),
    new imgLotr( "lotr-hobbit3.jpg"),
    new imgLotr( "lotr-hobbit4.jpg"),
  ]
}
