import React, { useState, useEffect } from 'react';

import { Container, GridContainer, Buttons, Content } from './styles';
import Button from '../../components/Button';
import CardContact from '../../components/CardContact';

import api from '../../services/api';
import { Contact } from '../../@types';

const Homepage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    api.get('/').then((response) => {
      setContacts(response.data.contacts);
    });
  }, []);

  return (
    <Container>
      <h1>Contatos</h1>
      <Content>
        <Buttons>
          <Button title="Adicionar Contato" />
        </Buttons>
        <GridContainer>
          {contacts?.map((item) => (
            <CardContact key={item.id} {...item} />
          ))}
        </GridContainer>
      </Content>
    </Container>
  );
};

export default Homepage;
