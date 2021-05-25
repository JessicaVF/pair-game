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
  }

}
