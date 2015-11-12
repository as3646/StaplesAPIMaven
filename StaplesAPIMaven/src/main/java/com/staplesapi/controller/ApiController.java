package com.staplesapi.controller;

/**
 * Created by TriPa002 on 8/27/2015.
 */


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ApiController {

    @RequestMapping(value="/login", method = RequestMethod.GET)
    public ModelAndView myLogin(){
        ModelAndView mv=new ModelAndView("login");
        return mv;
    };
    
    @RequestMapping(value="/home", method= RequestMethod.GET)
    public ModelAndView myHome(){
    	ModelAndView mv =new ModelAndView("home");
    	return mv;
    }
}


