//import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { imgLotr } from '../model/img.model';

@Component({
  selector: 'app-card-img-card',

  templateUrl: './card-img-card.component.html',
  styleUrls: ['./card-img-card.component.scss']
})
export class CardImgCardComponent implements OnInit {


  isSeen = false;
  toggleIsOpen() {
    this.isSeen = !this.isSeen;
  }

  @Input() lotrCharacter = new imgLotr(200, "saklndalkshflkahf", "default")

  constructor() { }

  ngOnInit(): void {
  }

}
