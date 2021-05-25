import { Component, OnInit } from '@angular/core';
import { LotrImagesService } from '../lotr-images.service';
import { imgLotr } from '../model/img.model';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {

  constructor( private imageServ: LotrImagesService) { }
  bodyImageTbl: imgLotr[] = [];
  ngOnInit(): void {
    this.bodyImageTbl = this.imageServ.imageTbl;
    this.bodyImageTbl = this.shuffle(this.bodyImageTbl);
  }
  shuffle(gameBoard: imgLotr[]):imgLotr[] {
    let j, x, i;
    for (i = gameBoard.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = gameBoard[i];
        gameBoard[i] = gameBoard[j];
        gameBoard[j] = x;
    }
    return gameBoard;
}
}
