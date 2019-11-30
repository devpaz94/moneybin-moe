import React from 'react';

import { Jumbotron } from 'reactstrap';
import LearnMore from './LearnMore'


function Header() {

  return (
  <div>
    <Jumbotron>
      <h1 className="display-3">Welcome to moneybin!</h1>
      <p className="lead">The easiest way to throw away your unwanted money</p>
      <hr className="my-2" />
      <p>After you put some money in the bin, you can share how much money you
      wasted with the world on social media. Bin your money now in just a few clicks!
      </p>
      <p className="lead">
      </p>
      <LearnMore />

    </Jumbotron>
  </div>
);
}

export default Header;
