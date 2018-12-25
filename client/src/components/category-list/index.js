import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './CategoryList.module.scss';
import HorizontalCard from '../horizontal-card';
import thumbnails from './thumbnails';

const CategoryList = ({ items=[] }) => {
  return (
    <div>
      <ul className={styles.list}>
        { items.map(item =>
          <li key={item.id}>
            <Link to={`/category/${item.id}`} >
              <HorizontalCard text={item.name} image={thumbnails[item.name] || ''} />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

CategoryList.propTypes = {
  items: PropTypes.array
}
 
export default CategoryList;