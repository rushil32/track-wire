import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import thumbnails from './thumbnails';
import styles from './CourseList.module.scss';
import VerticalCard from '../vertical-card';

function mapCourse(course) {
  return {
    header: course.title,
    body: course.description || '',
    preHeader: course.sub_category_name || '',
    postBody: course.created_at,
    image: thumbnails[course.sub_category_name] || '',
    placeholder: course.sub_category_name[0]
  }
}

const CourseList = ({ items=[] }) => {
  return (
    <div>
      <ul className={styles.list}>
        { items.map(item =>
          <li key={item.id}>
            <Link to={`/course/${item.id}`} >
              <VerticalCard item={mapCourse(item)} />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

CourseList.prototypes ={
  items: PropTypes.array
}
 
export default CourseList;