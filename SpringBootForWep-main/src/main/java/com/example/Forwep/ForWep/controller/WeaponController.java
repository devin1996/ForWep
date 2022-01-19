/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.Forwep.ForWep.controller;

import com.example.Forwep.ForWep.model.Weapon;
import com.example.Forwep.ForWep.repository.WeaponDetailsRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author devin.desilva
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2/")
public class WeaponController {
    
    @Autowired
    WeaponDetailsRepository WeaponDetailsRepository; 
            
    @GetMapping("/details")
    public ResponseEntity<List<Weapon>> getAllWeaponList(@RequestParam(required = false) String title) {
    
    return null;
    
  }
    
    
    
}
