import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interface/IProduct';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
   public ListProduct : Array<IProduct> = [
    {
      ProductImagePath : "https://115.78.228.208:20350/bvhsales/YUaXg9vBwjT9k7LUcXJktZ3Qely1/Rinnai/30.jpeg",
      ProductName : "Bếp Từ Âm",
      ProductPrice : 18532800
    },
    {
      ProductImagePath : "https://115.78.228.208:20350/bvhsales/YUaXg9vBwjT9k7LUcXJktZ3Qely1/Rinnai/49.jpeg",
      ProductName : "Bếp Từ Âm",
      ProductPrice : 18532800
    },
    {
      ProductImagePath : "https://115.78.228.208:20350/bvhsales/YUaXg9vBwjT9k7LUcXJktZ3Qely1/Rinnai/51.jpeg",
      ProductName : "Bếp Từ Âm",
      ProductPrice : 18532800
    },
    {
      ProductImagePath : "https://115.78.228.208:20350/bvhsales/YUaXg9vBwjT9k7LUcXJktZ3Qely1/Rinnai/55.jpeg",
      ProductName : "Bếp Từ Âm",
      ProductPrice : 1853280000
    },
    {
      ProductImagePath : "https://115.78.228.208:20350/bvhsales/YUaXg9vBwjT9k7LUcXJktZ3Qely1/Rinnai/65.jpeg",
      ProductName : "Bếp Từ Âm",
      ProductPrice : 18532800
    },
    {
      ProductImagePath : "https://115.78.228.208:20350/bvhsales/YUaXg9vBwjT9k7LUcXJktZ3Qely1/Rinnai/62.jpeg",
      ProductName : "Bếp Từ Âm",
      ProductPrice : 18532800
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
