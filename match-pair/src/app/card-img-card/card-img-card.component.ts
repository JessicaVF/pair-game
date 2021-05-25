import { Component, Input, OnInit } from '@angular/core';
import { imgLotr } from '../model/img.model';

@Component({
  selector: 'app-card-img-card',
  templateUrl: './card-img-card.component.html',
  styleUrls: ['./card-img-card.component.scss']
})
export class CardImgCardComponent implements OnInit {

  @Input() lotrCharacter = new imgLotr("saklndalkshflkahf")

  constructor() { }

  ngOnInit(): void {
  }

}
