import { GlobalService } from './../../../../@core/global.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {


  constructor (private router: Router, private _globalService: GlobalService) { }
  data: any
  productObj;
  counter=0
totalProductPrice
  ngOnInit(): void {
    this.getCartProduct()
  }
  // get data from cart
  getCartProduct() {
    this._globalService.get('cart').subscribe(res => {
      this.data = res;
      console.log(this.data);
this.data.forEach(e=>{
  console.log(e.price);
this.counter=e.price
})
    })

  }
  // navigate to checkout
  checkout() {
    this.router.navigate(['./home/checkout'])
  }
  // clear product and data base
  clearProduct(e, product) {
    console.log(e.path[2]);
    const item = e.path[2];
    // this._globalService.delete('cart', product).subscribe(res => {
    //   this.getCartProduct()
    // })
    item.remove()

  }
  increaseProduct(price){
this.counter = price.path[1].previousElementSibling.firstChild.textContent;
const count= Number(this.counter);
this.totalProductPrice =count+count
return this.totalProductPrice
  }
}
