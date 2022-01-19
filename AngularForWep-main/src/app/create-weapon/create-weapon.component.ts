import { Component, OnInit } from '@angular/core';
import { Weapon } from '../weapon';
import { WeaponserviceService } from '../weaponservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-weapon',
  templateUrl: './create-weapon.component.html',
  styleUrls: ['./create-weapon.component.css']
})
export class CreateWeaponComponent implements OnInit {

  weapon: Weapon = new Weapon();
  constructor(private weaponService: WeaponserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  saveWeapon (){
    this.weaponService.createWeapon(this.weapon).subscribe( data =>{
      console.log(data);
      this.goToWeaponList();
    },
    error => console.log(error));
  }

  goToWeaponList(){
    this.router.navigate(['/weapons']);
  }
  
  onSubmit(){
    console.log(this.weapon);
    this.saveWeapon();
  } 
  home() {
    this.router.navigate(['weapons']);
  }

  createweapon() {
    this.router.navigate(['create-weapon']);
  }

  newfeature() {
    this.router.navigate(['world-space']);

  }
  
  logout() {
    this.router.navigate(['admin-login']);
  }

}
