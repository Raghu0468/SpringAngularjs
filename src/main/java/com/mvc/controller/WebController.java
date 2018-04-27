package com.mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WebController {
   @RequestMapping(value = "/", method = RequestMethod.GET)
   public String homepage() {
      return "index";
   }

   @RequestMapping(value = "/notify", method = RequestMethod.GET)
   public String notifypage() {
      return "notify";
   }

   @RequestMapping(value = "/header", method = RequestMethod.GET)
   public String headerpage() {
      return "header";
   }

   @RequestMapping(value = "/menu", method = RequestMethod.GET)
   public String menupage() {
      return "menu";
   }

   @RequestMapping(value = "/footer", method = RequestMethod.GET)
   public String footerpage() {
      return "footer";
   }

   @RequestMapping(value = "/dashboard", method = RequestMethod.GET)
   public String dashboardpage() {
      return "dashboard";
   }

   @RequestMapping(value = "/calendar", method = RequestMethod.GET)
   public String calendarpage() {
      return "calendar";
   }

   @RequestMapping(value = "/elements", method = RequestMethod.GET)
   public String elementspage() {
      return "elements";
   }

   @RequestMapping(value = "/treeview", method = RequestMethod.GET)
   public String treeviewpage() {
      return "treeview";
   }

   @RequestMapping(value = "/nestable-list", method = RequestMethod.GET)
   public String nestablelistpage() {
      return "nestable-list";
   }

   @RequestMapping(value = "/content-slider", method = RequestMethod.GET)
   public String contentsliderpage() {
      return "content-slider";
   }

   @RequestMapping(value = "/form-elements", method = RequestMethod.GET)
   public String formelementspage() {
      return "form-elements";
   }

   @RequestMapping(value = "/form-elements-2", method = RequestMethod.GET)
   public String formelements2page() {
      return "form-elements-2";
   }

   @RequestMapping(value = "/form-wizard", method = RequestMethod.GET)
   public String formwizardpage() {
      return "form-wizard";
   }

   @RequestMapping(value = "/dropzone", method = RequestMethod.GET)
   public String dropzonepage() {
      return "dropzone";
   }

   @RequestMapping(value = "/profile", method = RequestMethod.GET)
   public String profilepage() {
      return "profile";
   }

   @RequestMapping(value = "/faq", method = RequestMethod.GET)
   public String faqpage() {
      return "faq";
   }

   @RequestMapping(value = "/inbox", method = RequestMethod.GET)
   public String inboxpage() {
      return "inbox";
   }

   @RequestMapping(value = "/timeline", method = RequestMethod.GET)
   public String timelinepage() {
      return "timeline";
   }

   @RequestMapping(value = "/search", method = RequestMethod.GET)
   public String searchpage() {
      return "search";
   }

   @RequestMapping(value = "/wysiwyg", method = RequestMethod.GET)
   public String wysiwygpage() {
      return "wysiwyg";
   }

   @RequestMapping(value = "/gallery", method = RequestMethod.GET)
   public String gallerypage() {
      return "gallery";
   }

   @RequestMapping(value = "/widgets", method = RequestMethod.GET)
   public String widgetspage() {
      return "widgets";
   }

   @RequestMapping(value = "/jqgrid", method = RequestMethod.GET)
   public String jqgridpage() {
      return "jqgrid";
   }

   @RequestMapping(value = "/jquery-ui", method = RequestMethod.GET)
   public String jqueryuipage() {
      return "jquery-ui";
   }

   @RequestMapping(value = "/invoice", method = RequestMethod.GET)
   public String invoicepage() {
      return "invoice";
   }

   @RequestMapping(value = "/error-404", method = RequestMethod.GET)
   public String error404page() {
      return "error-404";
   }

   @RequestMapping(value = "/error-500", method = RequestMethod.GET)
   public String error500page() {
      return "error-500";
   }

   @RequestMapping(value = "/email", method = RequestMethod.GET)
   public String emailpage() {
      return "email";
   }

   @RequestMapping(value = "/typography", method = RequestMethod.GET)
   public String typographypage() {
      return "typography";
   }

   @RequestMapping(value = "/grid", method = RequestMethod.GET)
   public String gridpage() {
      return "grid";
   }

   @RequestMapping(value = "/tables", method = RequestMethod.GET)
   public String tablespage() {
      return "tables";
   }

   @RequestMapping(value = "/buttons", method = RequestMethod.GET)
   public String buttonspage() {
      return "buttons";
   }

   @RequestMapping(value = "/pricing", method = RequestMethod.GET)
   public String pricingpage() {
      return "pricing";
   }

   @RequestMapping(value = "/mobile-menu-1", method = RequestMethod.GET)
   public String mobilemenu1page() {
      return "mobile-menu-1";
   }

   @RequestMapping(value = "/mobile-menu-2", method = RequestMethod.GET)
   public String mobilemenu2page() {
      return "mobile-menu-2";
   }

   @RequestMapping(value = "/mobile-menu-3", method = RequestMethod.GET)
   public String mobilemenu3page() {
      return "mobile-menu-3";
   }

   @RequestMapping(value = "/top-menu", method = RequestMethod.GET)
   public String topmenupage() {
      return "top-menu";
   }

   @RequestMapping(value = "/two-menu-1", method = RequestMethod.GET)
   public String twomenu1page() {
      return "two-menu-1";
   }

   @RequestMapping(value = "/two-menu-2", method = RequestMethod.GET)
   public String twomenu2page() {
      return "two-menu-2";
   }

}
