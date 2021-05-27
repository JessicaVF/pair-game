import { Component, Input, OnInit } from '@angular/core';
import { imgLotr } from '../model/img.model';

@Component({
  selector: 'app-card-img-card',
  templateUrl: './card-img-card.component.html',
  styleUrls: ['./card-img-card.component.scss']
})
export class CardImgCardComponent implements OnInit {
flipCard = false
  @Input() lotrCharacter = new imgLotr("saklndalkshflkahf")
  //@Input() myIndex: number = 1;

  constructor() { }

  ngOnInit(): void {
<<<<<<< HEAD
    // console.log(this.lotrCharacter);

=======
    if(!this.flipCard){
      console.log(this.lotrCharacter.urlName);
    }
>>>>>>> 72fee1d6f7502512ff4d597e1f3e72b3034920a1
  }

}
