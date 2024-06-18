import React from 'react';

const withLoading = (Component) => ({ isLoading, ...props }) => {
  if (isLoading) return <div>Loading...</div>;
  return <Component {...props} />;
};

export default withLoading;
