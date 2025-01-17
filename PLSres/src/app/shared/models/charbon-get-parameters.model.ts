import { CourseType } from '../utils/course-type.model';

export interface CharbonGetParameters {
  courses?: String[];
  courseType?: CourseType;
  minDate?: Date;
  maxDate?: Date;
  minDuration?: number;
  maxDuration?: number;
  hasDurationOnly?: boolean;
  offset?: number;
  limit?: number;
  sort ?: string;
}
