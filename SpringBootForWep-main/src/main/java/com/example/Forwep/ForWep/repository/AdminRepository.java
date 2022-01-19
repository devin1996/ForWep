/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.Forwep.ForWep.repository;

import com.example.Forwep.ForWep.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author devin.desilva
 */
public interface AdminRepository extends JpaRepository<Admin, Long>{

    Admin findByEmail(String email);
    
}
