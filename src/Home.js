import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';
import ButtonContext from './ButtonContext';

const Home = () => {
  const { context, setContext } = useContext(AppContext);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Current Context: {context}</p>
        <ButtonContext/>
      <br />
      <Link to="/contact">Go to Contact</Link>
    </div>
  );
};

export default Home;
