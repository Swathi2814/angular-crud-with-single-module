import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { EmployeeListComponent } from './app/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './app/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './app/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './app/employee-details/employee-details.component';
import { AppRoutingModule } from './app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
     EmployeeListComponent,
      CreateEmployeeComponent,
     UpdateEmployeeComponent,
     EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // CreateEmployeeModule,
    // EmployeeDetailsModule,
    // EmployeeListModule,
    // UpdateEmployeeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
