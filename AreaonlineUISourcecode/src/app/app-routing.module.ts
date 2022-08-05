import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{EmployeeComponent} from './employee/employee.component';
import{DepartmentComponent} from './department/department.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StaticPagesComponent } from './static-pages/static-pages.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { TermsandconditionsforuseComponent } from './termsandconditionsforuse/termsandconditionsforuse.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NoSearchFoundComponent } from './no-search-found/no-search-found.component';
import { OutofstockComponent } from './outofstock/outofstock.component';
import { CareerComponent } from './career/career.component';
const routes: Routes = [
  {path:'employee', component:EmployeeComponent},
  {path:'department', component:DepartmentComponent},
  {path: 'ProductDetails',component:ProductDetailsComponent},
  {path:'PrivacyPolicy',component:StaticPagesComponent},
  {path:'Disclaimer',component:DisclaimerComponent},
  {path:'Termsandconditionsforuse',component:TermsandconditionsforuseComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path: 'NoSearchFound',component:NoSearchFoundComponent},
  {path: 'Outofstock',component:OutofstockComponent},
  {path: 'Carrer',component:CareerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
