/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.Forwep.ForWep.controller;

import com.example.Forwep.ForWep.model.Admin;
import com.example.Forwep.ForWep.repository.AdminRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/api/admin/")

public class AdminController {
    
    @Autowired
    private AdminRepository adminRepository;
    
    @PostMapping("/adminlogin")
    public ResponseEntity<?> loginAdmin(@RequestBody Admin admin){
        System.out.println(admin);
        Admin admin1=adminRepository.findByEmail(admin.getEmail());
        if(admin1.getPassword().equals(admin.getPassword()))
            return ResponseEntity.ok(admin1);
        
        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }
}
