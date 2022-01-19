/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.Forwep.ForWep.controller;

import com.example.Forwep.ForWep.model.Entities;
import com.example.Forwep.ForWep.model.Weapons;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author devin.desilva
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v3/")
public class MovingEntitiesController {

    @GetMapping("/entityval")
    public ResponseEntity<Entities> getEmployeeById() {
        double rand = Math.random() * 1;
        double l = Math.random() * 200;
        double w = Math.random() * 200;
        double x = Math.random() * 800;
        double y = Math.random() * 800;
        Entities newObj = new Entities();
        newObj.setName("Circle");
        newObj.setPath("Right Side Path");
        newObj.setVelocity(25);
        newObj.setLength(l);
        newObj.setWidth(w);
        newObj.setXaxis(x);
        newObj.setYaxis(y);
        System.out.println(newObj.getName());
        return ResponseEntity.ok(newObj);
    }

    @RequestMapping("/test")
    public String home() {
        return "Hello World!";
    }

//    	@GetMapping("/entity")
//	public List<Weapons> getAllWeapons(){
//		return weaponRepository.findAll();
//	}
}
