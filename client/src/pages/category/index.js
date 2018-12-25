import React, { Component } from "react";

import SubCategoryList from "../../components/sub-category-list";
import Hero from "../../components/hero";
import icons from './icons';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      subCategories: []
    }
  }

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      const { id } = this.props.match.params; 
      let response = await fetch(`/category/${id}/sub_categories`)
      response = await response.json();
      
      this.setState({
        category: response["category_name"], 
        subCategories: response["sub_categories"]
      });
    }
  }

  render() { 
    const { category, subCategories } = this.state;

    return (
      <div>
        <Hero>
          {/* <img src={icons[category]} alt={category} /> */}
          <h1>{category}</h1>
        </Hero>
        <section>
          <SubCategoryList items={subCategories} /> 
        </section>
      </div>
    );
  }
}
 
export default Category;