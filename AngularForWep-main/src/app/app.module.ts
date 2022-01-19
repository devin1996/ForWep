import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule} from '@angular/forms';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { WeaponDetailsComponent } from './weapon-details/weapon-details.component';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { UpdateWeaponComponent } from './update-weapon/update-weapon.component';
import { CreateWeaponComponent } from './create-weapon/create-weapon.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NavbarService } from './navbar.service';
import { WorldspaceserviceComponent } from './worldspaceservice/worldspaceservice.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    WeaponDetailsComponent,
    WeaponListComponent,
    UpdateWeaponComponent,
    CreateWeaponComponent,
    AdminLoginComponent,
    NavbarComponent,
    WorldspaceserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
