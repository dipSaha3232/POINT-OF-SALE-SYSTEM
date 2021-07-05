import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { StockReportService } from '../stock-report.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-stock-report',
  templateUrl: './stock-report.component.html',
  styleUrls: ['./stock-report.component.css']
})
export class StockReportComponent implements OnInit {

  stock : Product [] = [];
  constructor(private stockReportService : StockReportService,
              public userService : UserService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() : void {
    this.stockReportService.getReport().subscribe(
      response => {
        this.stock=response;
      }
    );
  }

}
