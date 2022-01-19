import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin = new Admin();

  constructor(private adminService: AdminServiceService,
    private router: Router, public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

  loginvalidation(){
    console.log(this.admin.email);
    console.log(this.admin.password);
    if(this.admin.email == "admin@admin.com" && this.admin.password == "admin1234"){
      this.goToWeaponList();
    }
    else{
      alert("Invalid Login Credintials");
    }

  }

  goToWeaponList(){
    this.router.navigate(['/weapons']);
  }

  userLogin(){
    console.log(this.admin);
    this.adminService.loginAdmin(this.admin).subscribe(data=>{
      //alert("Login Successfully");
      this.goToWeaponList();
    },error=>alert("Invalid Credintials"));
    
  }

}
