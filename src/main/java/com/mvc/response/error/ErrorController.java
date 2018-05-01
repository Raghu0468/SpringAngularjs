package com.mvc.response.error;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.FileReader;

@Controller
@RequestMapping("/error")
public class ErrorController {

   @RequestMapping(value = "error404.json", produces = "application/json")
   public @ResponseBody
   Object[] getErrorList() {

      try {
         JSONParser parser = new JSONParser();
         JSONArray a = (JSONArray) parser.parse(new FileReader("D:\\Project\\SpringAngularjs\\src\\main\\resources\\json\\error404.json"));

         return a.toArray();

      } catch (Exception e) {
         e.printStackTrace();
      }

      return null;
   }

}
