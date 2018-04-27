package com.mvc.response.pricingtable;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.FileReader;

@Controller
@RequestMapping("/pricingtable")
public class PricingtableController {

   @RequestMapping(value = "pricing.json", produces = "application/json")
   public @ResponseBody
   Object[] getPricingtableList() {

      try {
         JSONParser parser = new JSONParser();
         JSONArray a = (JSONArray) parser.parse(new FileReader("D:\\Project\\Spring_Raghu-master\\src\\main\\resources\\json\\pricingtables.json"));

         return a.toArray();

      } catch (Exception e) {
         e.printStackTrace();
      }

      return null;
   }

}

