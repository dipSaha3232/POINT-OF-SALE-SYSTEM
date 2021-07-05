import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './app-routes.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { StockAddComponent } from './stock-add/stock-add.component';
import { StockAddService } from './stock-add.service';
import { StockReportComponent } from './stock-report/stock-report.component';
import { StockReportService } from './stock-report.service';
import { StockDeleteComponent } from './stock-delete/stock-delete.component';
import { StockDeleteService } from './stock-delete.service';
import { StockUpdateComponent } from './stock-update/stock-update.component'
import { StockUpdateService } from './stock-update.service';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { SalesReportService } from './sales-report.service';
import { SalesAddComponent } from './sales-add/sales-add.component';
import { SalesAddService } from './sales-add.service';
import { ServiceAddComponent } from './service-add/service-add.component';
import { ServiceAddService } from './service-add.service';
import { ServiceReportComponent } from './service-report/service-report.component';
import { ServiceReportService } from './service-report.service';
import { ServiceViewComponent } from './service-view/service-view.component';
import { ServiceViewService } from './service-view.service';
import { ServiceUpdateComponent } from './service-update/service-update.component';
import { ServiceUpdateService } from './service-update.service';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { ReportComponent } from './report/report.component';
import { ManageStockComponent } from './manage-stock/manage-stock.component';
import { RegisterComponent } from './register/register.component';
import { RegisterServiceService } from './register-service.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StaffPanelComponent } from './staff-panel/staff-panel.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { AdminGuardService } from './admin-guard.service';
import { StaffGuardService } from './staff-guard.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StockAddComponent,
    StockReportComponent,
    StockDeleteComponent,
    StockUpdateComponent,
    SalesReportComponent,
    SalesAddComponent,
    ServiceAddComponent,
    ServiceReportComponent,
    ServiceViewComponent,
    ServiceUpdateComponent,
    CustomerServiceComponent,
    ReportComponent,
    ManageStockComponent,
    RegisterComponent,
    AdminPanelComponent,
    StaffPanelComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutesModule,
  ],
  providers: [
    UserService,
    StockAddService,
    StockReportService,
    StockDeleteService,
    StockUpdateService,
    SalesReportService,
    SalesAddService,
    ServiceAddService,
    ServiceReportService,
    ServiceViewService,
    ServiceUpdateService,
    RegisterServiceService,
    AuthGuardService,
    AdminGuardService,
    StaffGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
