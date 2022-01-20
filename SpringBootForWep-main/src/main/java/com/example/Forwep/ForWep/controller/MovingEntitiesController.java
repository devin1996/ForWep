/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.Forwep.ForWep.controller;

import com.example.Forwep.ForWep.model.Entities;
import com.example.Forwep.ForWep.model.Mouse;
import com.example.Forwep.ForWep.model.Weapons;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
public class MovingEntitiesController {

    Mouse mouseobj;

    @PostMapping("/mouse")
    public Mouse createEmployee(@RequestBody Mouse mouse) {

        return mouse;
    }

    @PostMapping("/mouse123")
    public Mouse createEmployees(@RequestBody Mouse mouse) {
        mouseobj = mouse;
        return mouse;
    }

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
        newObj.setChoice(5);
        System.out.println(newObj.getName());
        return ResponseEntity.ok(newObj);

    }

    @GetMapping("/entityval1")
    public ResponseEntity<Entities> getEmployee() {

        Random rn = new Random();

        Entities newObj1 = new Entities();

        double mouseX = mouseobj.getMousex();
        double mouseY = mouseobj.getMousey();
        double length = Math.random();
        double width = Math.random();

        int choosetype = rn.nextInt(3 - 1 + 1) + 1;

        if (choosetype == 1) {
            newObj1.setName("Circle");
        } else if (choosetype == 2) {
            newObj1.setName("Rectangle");
        } else {
            newObj1.setName("Triangle");
        }

        newObj1.setPath("Right Side Path");
        newObj1.setVelocity(25);
        newObj1.setLength(length);
        newObj1.setWidth(width);
        newObj1.setXaxis(mouseX);
        newObj1.setYaxis(mouseY);
        newObj1.setChoice(choosetype);

        return ResponseEntity.ok(newObj1);
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
