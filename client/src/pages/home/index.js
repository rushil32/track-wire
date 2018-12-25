import React, { Component } from 'react';

import CategoryList from "../../components/category-list";
import CourseList from "../../components/course-list";
import { getCategories } from '../../helpers/categoryHelpers';
import { getRecentCourses } from '../../helpers/courseHelpers';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      courses: []
    }
  }

  async componentDidMount() {
    const [categories, courses] = await Promise.all([
      getCategories(),
      getRecentCourses(4)
    ]);
    
    this.setState({ categories, courses });
  }

  render() { 
    const { categories, courses } = this.state;

    return (
      <div>
        <section>
          <h3>Categories</h3>
          <CategoryList items={categories} />
        </section>
        <section>
          <h3>Recent</h3>
          <CourseList items={courses} />
        </section>
      </div>
    );
  }
}

export default Home;
