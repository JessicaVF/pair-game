// import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { imgLotr } from '../model/img.model';

@Component({
  selector: 'app-card-img-card',
  // animations: [
  //   trigger('cardFlip', [
  //     state('default', style({
  //       transform: 'none'
  //     })),
  //     state('flipped', style({
  //       transform: 'rotateY(180deg)'
  //     })),
  //     transition('default => flipped', [
  //       animate('400ms')
  //     ]),
  //     transition('flipped => default', [
  //       animate('200ms')
  //     ])
  //   ])
  // ],
  templateUrl: './card-img-card.component.html',
  styleUrls: ['./card-img-card.component.scss']
})
export class CardImgCardComponent implements OnInit {
  isFlipped = false;
  @Input() canFlip: boolean = true;
  @Input() lotrCharacter = new imgLotr(200, "saklndalkshflkahf", "default")
  @Input()  cardnumber = 0;
  @Output() evt = new EventEmitter<imgLotr>();
  @Output() theUrl = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.lotrCharacter.picId = this.cardnumber;
  }

//   flipFunction(){
//     this.isFlipped = !this.isFlipped;

//     if(this.lotrCharacter.state === "default"){
//       this.lotrCharacter.state = "flipped";
//       console.log(this.lotrCharacter.urlName);
//       this.theUrl.emit(this.lotrCharacter.urlName);
//     }else if (this.lotrCharacter.state === "flipped") {
//       this.lotrCharacter.state = "default";
//     }
//     this.evt.emit(this.lotrCharacter);
//   }

// }
flipFunction(){

  if (this.canFlip){
    this.isFlipped = !this.isFlipped;
    this.theUrl.emit(this.lotrCharacter.urlName);
  }
  else{
    console.log("flip another card");
  }



}

}
