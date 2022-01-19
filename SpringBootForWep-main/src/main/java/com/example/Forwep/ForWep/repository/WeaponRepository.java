/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.Forwep.ForWep.repository;

import com.example.Forwep.ForWep.model.Employee;
import com.example.Forwep.ForWep.model.Weapons;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author devin.desilva
 */

public interface WeaponRepository  extends JpaRepository<Weapons, Long>{

    
}
