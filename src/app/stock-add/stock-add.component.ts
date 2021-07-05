import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { StockAddService } from '../stock-add.service';

@Component({
  selector: 'app-stock-add',
  templateUrl: './stock-add.component.html',
  styleUrls: ['./stock-add.component.css']
})
export class StockAddComponent implements OnInit {

  constructor(private stockAddService : StockAddService) { }

  product : Product = new Product();

  ngOnInit(): void {
  }

  addItem() : void {
    this.stockAddService.addItem(this.product).subscribe (
      response => {
        if(response == true)
          alert("Item added successfully");
        else
          alert("Product id already exists");
        
        this.product = new Product();
      }
    );
  }
}
