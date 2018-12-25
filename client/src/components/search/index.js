import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <input type="text" placeholder={this.props.placeholder} />
      </div>
    );
  }
}

Search.propTypes = {
  placeholder: PropTypes.string
}

Search.defaultProps = {
  placeholder: "Search..."
}
 
export default Search;