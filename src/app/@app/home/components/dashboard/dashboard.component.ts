import { GlobalService } from './../../../../@core/global.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  products: number[]
  constructor (
    private _globalService: GlobalService
  ) { }
  ngOnInit() {
    this._globalService.get('products').subscribe(res => {
      this.data = res

      const data = this.data.sort(() => Math.random() - 0.5)
      this.products = data.slice(1, 5)



    })
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  tab: any = 'tab1';
  tab1: any
  tab2: any
  tab3: any



  onClick(check: number) {
    if (check == 1) {
      this.tab = 'tab1';
    } else if (check == 2) {
      this.tab = 'tab2';
    } else {
      this.tab = 'tab3';
    }

  }

}
