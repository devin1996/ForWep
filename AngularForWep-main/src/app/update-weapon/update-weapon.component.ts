import { Component, OnInit } from '@angular/core';
import { WeaponserviceService } from '../weaponservice.service';
import { Weapon } from '../weapon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-weapon',
  templateUrl: './update-weapon.component.html',
  styleUrls: ['./update-weapon.component.css']
})

export class UpdateWeaponComponent implements OnInit {

  id: number;
  weapon: Weapon = new Weapon();
  constructor(private weaponService: WeaponserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.weaponService.getWeaponById(this.id).subscribe(data => {
      this.weapon = data;

    }, error => console.log(error));
    
  }

  onSubmit(){
    this.weaponService.updateWeapon(this.id, this.weapon).subscribe( data =>{
      this.goToWeaponList();
    }
    , error => console.log(error));
  }

  goToWeaponList(){
    this.router.navigate(['/weapons']);
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
