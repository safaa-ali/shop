import { GlobalService } from './../../@core/global.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  constructor(private _globalService:GlobalService) { }

@Input() item:any

@Output() productItem = new EventEmitter()
  ngOnInit(): void {
  }
addCart(item:Input){
  item=this.item;
this._globalService.post('cart',item).subscribe(res=>{
  console.log(res);

})
}
sendItem() {
  this.productItem.emit(this.item);
}
}
