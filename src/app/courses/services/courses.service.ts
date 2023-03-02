import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {

    return [
        {_id: '1', name: 'Angular', category: 'front-end'},
        {_id: '2', name: 'React', category: 'front-end'},
        {_id: '3', name: 'Vue', category: 'front-end'},
        {_id: '4', name: 'Spring Framework', category: 'back-end'},
        {_id: '5', name: 'Express', category: 'back-end'},
        {_id: '6', name: 'Nest', category: 'back-end'},
    ];

  }

}
