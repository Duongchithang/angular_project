import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/interface/IProduct';
import { formatMoneyVND } from 'src/helper/formatVnd';
@Component({
  selector: 'app-ProductDetail',
  templateUrl: './ProductDetail.component.html',
  styleUrls: ['./ProductDetail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() DataProductDetail!: IProduct;
  formattedAmount?: string;
  constructor() {
    
   }
   
  ngOnInit() {
    this.formattedAmount = formatMoneyVND(this.DataProductDetail.ProductPrice);
  }
  
}
