/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.Forwep.ForWep.model;

/**
 *
 * @author User
 */
public class Mouse {
    private double mousex;
    private double mousey;

    public Mouse(double mousex, double mousey) {
        this.mousex = mousex;
        this.mousey = mousey;
    }

    public Mouse() {
        
    }
    
    

    public double getMousex() {
        return mousex;
    }

    public void setMousex(double mousex) {
        this.mousex = mousex;
    }

    public double getMousey() {
        return mousey;
    }

    public void setMousey(double mousey) {
        this.mousey = mousey;
    }
    
    
    
}
