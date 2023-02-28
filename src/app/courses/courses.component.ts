import { Course } from './model/course';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {

    courses: Course[];

    displayedColumns: string[];

    constructor() {

        this.courses = [
            {_id: '1', name: 'Angular', category: 'front-end'},
            {_id: '2', name: 'React', category: 'front-end'},
            {_id: '3', name: 'Vue', category: 'front-end'},
            {_id: '4', name: 'Spring Framework', category: 'back-end'},
            {_id: '5', name: 'Express', category: 'back-end'},
            {_id: '6', name: 'Nest', category: 'back-end'},
        ];

        this.displayedColumns = ['name', 'category'];

    }

}
