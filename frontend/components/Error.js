import { Alert } from 'bootstrap';
import React from 'react';

const Error = ({ children }) => {
  return (
    <div>
      <Alert color='danger'>{children}</Alert>
    </div>
  );
};

export default Error;
