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
    new imgLotr( "lotr_hobbit1-sw.jpg"),
    new imgLotr( "lotr_hobbit2-fb.jpg"),
    new imgLotr( "lotr_hobbit3.jpg"),
    new imgLotr( "lotr_hobbit4.jpg"),
  ]
}
