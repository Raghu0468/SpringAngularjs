package com.mvc.response.invoice;

import java.io.FileReader;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.springframework.core.io.ClassPathResource;
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
		     ClassPathResource classPathResource = new ClassPathResource("json" + "\\invoice.json");
		     JSONParser parser = new JSONParser();
		     JSONArray a = (JSONArray) parser.parse(new FileReader(classPathResource.getFile()));
	         return a.toArray();

	      } catch (Exception e) {
	         e.printStackTrace();
	      }

	      return null;
	   }
}
