import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from './model/course';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

    courses: Observable<Course[]>;

    displayedColumns: string[];

    // coursesService: CoursesService;

    constructor(private coursesService: CoursesService) {

        // this.coursesService = new CourssesService();

        this.courses = this.coursesService.list();

        this.displayedColumns = ['name', 'category'];

    }

    ngOnInit() {

        // this.courses = this.coursesService.list();

    }

}
