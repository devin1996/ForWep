import { Component, OnInit } from '@angular/core';
import { Weapon } from '../weapon';
import { ActivatedRoute } from '@angular/router';
import { WeaponserviceService } from '../weaponservice.service';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrls: ['./weapon-details.component.css']
})
export class WeaponDetailsComponent implements OnInit {

  id: number
  weapon: Weapon
  constructor(private route: ActivatedRoute, private weaponService: WeaponserviceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.weapon = new Weapon();
    this.weaponService.getWeaponById(this.id).subscribe( data => {
      this.weapon = data;
    });
  }

}
