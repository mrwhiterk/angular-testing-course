import { TestBed } from "@angular/core/testing";
import { CoursesService } from "./courses.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe("CoursesService", () => {

  let courseService: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CoursesService
      ]
    })

    courseService = TestBed.get(CoursesService);
  })

  it('should retrieve all courses', () => {

  });
})