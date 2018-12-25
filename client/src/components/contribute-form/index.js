import React, { Component } from 'react';
import Select from 'react-select'

import styles from './ContributeForm.module.scss';
import { getCategories } from '../../helpers/categoryHelpers';
import { getSubCategories } from '../../helpers/subCategoryHelpers';

class ContributeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      subCategories: [],
      category: '',
      subCategory: '',
      urls: [''],
      courseName: '',
    }
  }

  getCategories = async (id) => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  getSubCategories = async (id) => {
    const subCategories = await getSubCategories(id);
    this.setState({ subCategories });
  }

  componentDidMount() {
    this.getCategories();
  }

  getSelectOptions = (list) => {
    return list.map(item => ({ value: item.id, label: item.name }));
  }

  addUrl = () => {
    this.setState(prevState => ({ urls: prevState.urls.concat('') }));
  }

  handleUrlChange = (e, index) => {
    const value = e.target.value;
    
    this.setState(prevState => {
      const newURLs = [...prevState.urls];
      newURLs[index] = value;

      return { urls: newURLs };
    })
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSelect = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { categories, subCategories, category, subCategory, urls } = this.state;
    
    return (
      <div>
        <div className="form-input">
          <Select 
            options={this.getSelectOptions(categories)} 
            placeholder="Select Category"
            value={this.state.category}
            onChange={(selected) => {
              this.handleSelect('category', selected);
              this.getSubCategories(selected.value);
              this.setState({ subCategory: '' });
            }}
          />
        </div>
        

        {category && (
          <div className="form-input">
            <Select 
              options={this.getSelectOptions(subCategories)}
              placeholder="Select Sub Category"
              onChange={(selected) => this.handleSelect('subCategory', selected)}
              value={this.state.subCategory}
            />
          </div>
        )}

        {urls.length > 1 && (
          <div className="form-input">
            <input 
              type="text" 
              name="course"
              value={this.state.course}
              onChange={this.handleChange} 
              placeholder="We'll need a course name"
            />
          </div>
        )}

        {subCategory && urls.map((url, i) => (
          <div className="form-input">
            <input 
              type="text" 
              name="urls"
              value={this.state.urls[i]}
              onChange={(e) => this.handleUrlChange(e, i)} 
              placeholder="Paste URL here"
            />
          </div>
        ))}

        {subCategory && (
          <div className="form-input">
            <button className="link" onClick={this.addUrl}>ADD ANOTHER URL</button>
          </div>
        )}
        
        <button disabled={urls[0].length}>SUBMIT</button>
      </div>
    );
  }
}
 
export default ContributeForm;