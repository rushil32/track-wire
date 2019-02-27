import React, { Component } from 'react';
import Post from '../post';

import styles from './List.module.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  async componentDidMount() {
    const items = await this.props.getData();
    this.setState({ items });
  }

  render() { 
    const { header } = this.props;
    const { items } = this.state;

    return (
      <div className={styles.list}>
        <div className={styles.header}>
          {header}
        </div>
        { items.map((item, index) => (
          <div key={index} onClick={() => this.props.handleClick(item)}>
            <Post key={index} data={item} />
          </div>
        )) }
      </div>
    );
  }
}
 
List.defaultProps = {
  getData: () => {},
}

export default List;
