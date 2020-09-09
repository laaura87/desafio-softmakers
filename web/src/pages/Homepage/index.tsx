import React, { useState, useEffect } from 'react';

import { Container, GridContainer, Buttons, Content } from './styles';
import Button from '../../components/Button';
import CardContact from '../../components/CardContact';

import api from '../../services/api';
import { Contact } from '../../@types';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    api.get('/contacts').then((response) => {
      setContacts(response.data.contacts);
    });
  }, []);

  return (
    <Container>
      <h1>Contatos</h1>
      <Content>
        <Buttons>
          <Link to="/signup">
            <Button title="Adicionar Contato" />
          </Link>
        </Buttons>
        <GridContainer>
          {contacts.map &&
            contacts?.map((item) => <CardContact key={item.id} {...item} />)}
        </GridContainer>
      </Content>
    </Container>
  );
};

export default Homepage;
