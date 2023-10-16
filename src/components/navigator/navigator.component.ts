import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/interface/IProduct';
@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css'],
})
export class NavigatorComponent implements OnInit {
  public ListMenu: Array<IMenu> = [
    {
      PrefixUrl: '/home-page',
      NameItemMenu: 'Trang Chủ',
    },
    {
      PrefixUrl: '/store-page',
      NameItemMenu: 'Cửa Hàng',
    },
    {
      PrefixUrl: '/intro-page',
      NameItemMenu: 'Giới Thiệu',
    },
    {
      PrefixUrl: '/news-page',
      NameItemMenu: 'Tin Tức',
    },
    {
      PrefixUrl: '/contact-page',
      NameItemMenu: 'Liên Hệ',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
