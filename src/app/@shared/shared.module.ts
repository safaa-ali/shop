import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ProductItemComponent,
    BlogItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    NgxNavbarModule,

  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    ProductItemComponent,
    BlogItemComponent,
  ]
})
export class SharedModule { }
