import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';

const Contact = () => {
  const { context } = useContext(AppContext);

  return (
    <div>
      <h1>Contact Page</h1>
      <p>Current Context: {context}</p>
      <br />
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Contact;
