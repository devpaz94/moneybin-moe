/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import learn_more from '../../learn_more.jpg';

const LearnMore = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>{buttonLabel} Learn More</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>The story of Moneybin</ModalHeader>
        <img src={learn_more} alt="" style={{height: 400}} />
        <ModalBody>
          <p>We're a digital start-up led by two aspiring entrepeneurs who recognise the world is changing.</p>

          <p>We are living hand in hand with technology, generating masses of data and media every day.</p>

          We founded Moneybin to ensure there is a future platform that we can trust to bin our excess money.
          To provide the best money disposal experience and to be there for us and our future generations to look back on, forever.
          </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LearnMore;
