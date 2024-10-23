/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { CourseService } from './course.service';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from '@angular/common/http';

describe('Service: Course', () => {
 beforeEach(() => {
   TestBed.configureTestingModule({
     providers: [
      provideHttpClient(),
       provideHttpClientTesting(),
       CourseService
     ]
   });
 });

 it('should ...', inject([CourseService], (service: CourseService) => {
   expect(service).toBeTruthy();
 }));
});