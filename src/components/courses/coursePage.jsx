import React from 'react';
import Courses from './courses';
import CustomerReview from './customerReview';
import TrendingCourses from './trendingCourses';

const CoursePage = () => {
  return(
    <div>
       <Courses/>
       <TrendingCourses />
       <CustomerReview />
    </div>
  );
}

export default CoursePage;