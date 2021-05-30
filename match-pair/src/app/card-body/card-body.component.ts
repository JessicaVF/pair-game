import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LotrImagesService } from '../lotr-images.service';
import { imgLotr } from '../model/img.model';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {
  cardNumber = 0;
  constructor( private imageServ: LotrImagesService) { }
  cardSet: imgLotr[] = [];
  cardOne: string = "";
  cardTwo: string = "";
  canFlip: boolean = true;

  ngOnInit(): void {

    this.cardSet = this.imageServ.imageTbl;
    this.cardSet = this.shuffle(this.cardSet.concat(this.cardSet));
  }
  //pending: optimized this with a ForEach
  shuffle(gameBoard: imgLotr[]):imgLotr[] {
    let cardOne, cardTwo, i;
    for (i = gameBoard.length - 1; i > 0; i--) {
        cardOne = Math.floor(Math.random() * (i + 1));
        cardTwo = gameBoard[i];
        gameBoard[i] = gameBoard[cardOne];
        gameBoard[cardOne] = cardTwo;
    }
    return gameBoard;
}

assigne($event: string){

  if (this.cardOne == ""){
    this.cardOne = $event;
    //this.canFlip = false;
  }
  else{
    this.cardTwo= $event;
    //this.canFlip =false;
    this.compare();
  }

}
compare(){
  if (this.cardOne == this.cardTwo){
    console.log("yes");
    this.canFlip = true;
  }
  else{
    console.log("no");
    this.cardOne = "";
    this.cardTwo = "";
    this.canFlip = true;
  }
}

//peter logic
recieveChildInformation($event:imgLotr){
  console.log($event);
}
}
