package com.mvbr.crudspring.controller;

import com.mvbr.crudspring.model.Course;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {

    @GetMapping
    public List<Course> list() {
        return null;
    }

}
