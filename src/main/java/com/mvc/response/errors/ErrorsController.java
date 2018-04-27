package com.mvc.response.errors;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.FileReader;

@Controller
@RequestMapping("/errors")
public class ErrorsController {

   @RequestMapping(value = "error500.json", produces = "application/json")
   public @ResponseBody
   Object[] getErrorsList() {

      try {
         JSONParser parser = new JSONParser();
         JSONArray a = (JSONArray) parser.parse(new FileReader("D:\\Project\\Spring_Raghu-master\\src\\main\\resources\\json\\error500.json"));

         return a.toArray();

      } catch (Exception e) {
         e.printStackTrace();
      }

      return null;
   }

}

