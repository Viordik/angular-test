import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-order-courier',
  templateUrl: './order-courier.component.html',
  styleUrls: ['./order-courier.component.scss']
})
export class OrderCourierComponent implements OnInit {
  item: Item = {
    adressFrom: '',
    adressTo: '',
    data: '',
    time: '',
    status: 'Ожидает',
    comment: ''
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.item.adressFrom != ''
    && this.item.adressTo != ''
    && this.item.data != ''
    && this.item.time != '') {
      this.itemService.addItem(this.item);
      this.item.adressFrom = '';
      this.item.adressTo = '';
      this.item.data = '';
      this.item.time = '';
      this.item.comment = '';
    }
  }

}
