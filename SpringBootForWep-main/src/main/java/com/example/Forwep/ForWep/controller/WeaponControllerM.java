/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.Forwep.ForWep.controller;

import com.example.Forwep.ForWep.exception.ResourceNotFoundException;
import com.example.Forwep.ForWep.model.Employee;
import com.example.Forwep.ForWep.model.Weapon;
import com.example.Forwep.ForWep.model.Weapons;
import com.example.Forwep.ForWep.repository.WeaponRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author devin.desilva
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v3/")
public class WeaponControllerM {
    
    @Autowired
    private WeaponRepository weaponRepository;
    
    	// get all Weapon Details
	@GetMapping("/weapons")
	public List<Weapons> getAllWeapons(){
		return weaponRepository.findAll();
	}
        
        //get the selceted wepon by id
        @GetMapping("/weapons/{id}")
	public ResponseEntity<Weapons> getSelectectedWeapon(@PathVariable Long id) {
            //lambda expression
		Weapons Weapons = weaponRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Weapon does not exist with id :" + id));
		return ResponseEntity.ok(Weapons);
	}
        
        	// Add new weapon rest api
	@PostMapping("/weapons")
	public Weapons AddWeapon(@RequestBody Weapons Weapons) {
		return weaponRepository.save(Weapons);
	}
        
        // update employee rest api	
	@PutMapping("/weapons/{id}")
	public ResponseEntity<Weapons> updateWeapon(@PathVariable Long id, @RequestBody Weapons weaponDetails){
		Weapons Weapons = weaponRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Weapon does not exist with id :" + id));
		
		Weapons.setTitle(weaponDetails.getTitle());
		Weapons.setCategory(weaponDetails.getCategory());
		Weapons.setDescription(weaponDetails.getDescription());
		Weapons.setAmmunition(weaponDetails.getAmmunition());
                
		
		Weapons updatedWeapons = weaponRepository.save(Weapons);
		return ResponseEntity.ok(updatedWeapons);
	}
        
        
        // delete employee rest api
	@DeleteMapping("/weapons/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteWeapon(@PathVariable Long id){
		Weapons weapons = weaponRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Weapon not exist with id :" + id));
		
		weaponRepository.delete(weapons);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
        
    
}
