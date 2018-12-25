import React, { Component } from 'react';

import Hero from "../../components/hero";
import CourseList from "../../components/course-list";

class SubCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      subCategoryName: ''
    }
  }

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      const { id } = this.props.match.params; 
      let response = await fetch(`/sub_category/${id}/courses`);
      response = await response.json();
      
      this.setState({
        courses: response['courses'],
        subCategoryName: response['sub_category_name']
      });
    }
  }

  render() { 
    const { courses, subCategoryName } = this.state;

    return (
      <div>
        <Hero>{subCategoryName}</Hero>
        <section>
          <CourseList items={courses} /> 
        </section>
      </div>
      
    );
  }
}
 
export default SubCategory;