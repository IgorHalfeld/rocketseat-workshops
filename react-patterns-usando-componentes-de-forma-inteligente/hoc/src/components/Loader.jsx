import React from 'react';
import classes from './Loader.module.scss';

const LoaderHOC = ({ component: Component, isLoading, ...props }) => (
  isLoading ? (
    <div className={classes.loading}>
      <div className={classes.loadingSpinner}></div>
    </div>
  ) : <Component {...props} />
);

export default LoaderHOC