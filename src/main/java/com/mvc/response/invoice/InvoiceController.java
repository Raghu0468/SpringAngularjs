package com.mvc.response.invoice;

import java.io.FileReader;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/invoice")
public class InvoiceController {
	@RequestMapping(value = "invoice.json", produces = "application/json")
	   public @ResponseBody
	   Object[] getInvoiceList() {

	      try {
	         JSONParser parser = new JSONParser();
	         JSONArray a = (JSONArray) parser.parse(new FileReader("D:\\Project\\Spring_Raghu-master\\src\\main\\resources\\json\\invoice.json"));

	         return a.toArray();

	      } catch (Exception e) {
	         e.printStackTrace();
	      }

	      return null;
	   }
}
