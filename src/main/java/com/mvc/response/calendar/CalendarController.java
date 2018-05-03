package com.mvc.response.calendar;

import java.io.FileReader;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/calendar")
public class CalendarController {
	
	@RequestMapping(value = "calendar.json", produces = "application/json")
	   public @ResponseBody
	   Object[] getCalendarList() {

	      try {
	         JSONParser parser = new JSONParser();
	         JSONArray a = (JSONArray) parser.parse(new FileReader("D:\\Project\\SpringAngularjs\\src\\main\\resources\\json\\calendar.json"));

	         return a.toArray();

	      } catch (Exception e) {
	         e.printStackTrace();
	      }

	      return null;
	   }

}
