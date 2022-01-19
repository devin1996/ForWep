import { Component, OnInit } from '@angular/core';
import { Weapon } from '../weapon';
import { WeaponserviceService } from '../weaponservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})

export class WeaponListComponent implements OnInit {

  weapons : Weapon[];
  weapon: Weapon
  

  constructor(private weaponservice: WeaponserviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getWeapons();
  }

  private getWeapons() {

    this.weaponservice.getWeaponList().subscribe(data => {
      this.weapons = data;
      // for(let n = 0; n <= this.weapons.length; n++){
      //   console.dir(this.weapon.title);
      //  }
    });
    

  }

  updateWeapon(id: number) {
    this.router.navigate(['update-weapon', id]);
  }

  
  deleteWeapon(id: number) {
    this.weaponservice.deleteWeapon(id).subscribe(data => {
      console.log(data);
      this.getWeapons();
    })
  }

  weaponDetails(id: number) {
    this.router.navigate(['weapon-details', id]);
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
