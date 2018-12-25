import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './SubCategoryList.module.scss';
import HorizontalCard from '../horizontal-card';
import thumbnails from './thumbnails';

const SubCategoryList = ({ items=[] }) => {
  return (
    <div>
      <ul className={styles.list}>
        { items.map(item =>
          <li key={item.id}>
            <Link to={`/sub-category/${item.id}`} >
              <HorizontalCard text={item.name} image={thumbnails[item.name] || ''} />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

SubCategoryList.propTypes = {
  items: PropTypes.array
}
 
export default SubCategoryList;