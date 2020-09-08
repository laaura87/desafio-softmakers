import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';
import Button from '../Button';

import { Contact } from '../../@types';

const CardContact: React.FC<Contact> = (props) => {
  console.log(props);
  return (
    <Container>
      <div className="image-container">
        <img
          src={`http://localhost:3050/uploads/${props.image}`}
          alt={`${props.name}`}
        />
      </div>
      <div>
        <p>{props.name}</p>
      </div>
      <div>
        <Link to="/">
          <Button title="Editar" />
        </Link>
        <Link to="/">
          <Button title="Visualizar" />
        </Link>
        <Link to="/" className="delete">
          <Button title="Apagar" />
        </Link>
      </div>
    </Container>
  );
};

export default CardContact;
