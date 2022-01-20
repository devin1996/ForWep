/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.Forwep.ForWep.model;

/**
 *
 * @author devin.desilva
 */
public class Entities {

    private String name;
    private String path;
    private double velocity;
    private double length;
    private double width;
    private double xaxis;
    private double yaxis;
    private int choice;
    

    public Entities() {
    }

    public Entities(String name, String path, double velocity, double length, double width, double xaxis, double yaxis, int choice) {
        this.name = name;
        this.path = path;
        this.velocity = velocity;
        this.length = length;
        this.width = width;
        this.xaxis = xaxis;
        this.yaxis = yaxis;
        this.choice = choice;
    }

    public int getChoice() {
        return choice;
    }

    public void setChoice(int choice) {
        this.choice = choice;
    }

    

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public double getXaxis() {
        return xaxis;
    }

    public void setXaxis(double xaxis) {
        this.xaxis = xaxis;
    }

    public double getYaxis() {
        return yaxis;
    }

    public void setYaxis(double yaxis) {
        this.yaxis = yaxis;
    }
    
    

    public Entities(String name, String path, double velocity) {
        this.name = name;
        this.path = path;
        this.velocity = velocity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public double getVelocity() {
        return velocity;
    }

    public void setVelocity(double velocity) {
        this.velocity = velocity;
    }

}
