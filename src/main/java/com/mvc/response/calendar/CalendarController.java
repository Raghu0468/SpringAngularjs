package com.mvc.response.calendar;

import java.io.File;
import java.io.FileReader;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/calendar")
public class CalendarController {

   @RequestMapping(value = "calendar.json", produces = "application/json")
   public @ResponseBody
   Object[] getCalendarList(HttpServletRequest request) {

      try {
     ClassPathResource classPathResource = new ClassPathResource("json" + "\\calendar.json");
     JSONParser parser = new JSONParser();
     JSONArray a = (JSONArray) parser.parse(new FileReader(classPathResource.getFile()));

         return a.toArray();

      } catch (Exception e) {
         e.printStackTrace();
      }

      return null;
   }

}
