package com.backend.exclusive.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @GetMapping()
    public String index(){
        return "admin/index";
    }

    @GetMapping("/index")
    public String adminIndex() {
        return "admin/index"; // This resolves to src/main/resources/templates/admin/index.html
    }

    @GetMapping("/charts")
    public String adminChart() {
        return "admin/charts"; // This resolves to src/main/resources/templates/admin/index.html
    }

    @GetMapping("/tables")
    public String adminTables() {
        return "admin/tables"; // This resolves to src/main/resources/templates/admin/tables.html
    }
}
