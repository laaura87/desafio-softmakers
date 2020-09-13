import React from 'react';
import api from '../../services/api';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import Button from '../Button';

import { Contact } from '../../@types';

const CardContact: React.FC<Contact> = (props) => {
  function handleRemove() {
    const confirmRemove = window.confirm('Deseja apagar o contato?');

    if (confirmRemove) {
      const url = `http://localhost:3050/contacts/${props.id}`;

      api.delete(url).then((response) => console.log(response.data));
      window.location.reload();
    }
  }
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
        <Link to={`/${props.id}/edit`}>
          <Button title="Editar" />
        </Link>
        <Link to={`/${props.id}`}>
          <Button title="Visualizar" />
        </Link>
        <Link to="" className="delete" onClick={handleRemove}>
          <Button title="Apagar" />
        </Link>
      </div>
    </Container>
  );
};

export default CardContact;
