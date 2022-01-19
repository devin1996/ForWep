/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.Forwep.ForWep.repository;

import com.example.Forwep.ForWep.model.Weapon;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author devin.desilva
 */
public interface WeaponDetailsRepository extends MongoRepository<Weapon, String>{
    
    List<Weapon> findByTitleContaining(String title);

    
}
