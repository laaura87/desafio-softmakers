import React, { useState, useEffect } from 'react';

import { Container, GridContainer, Buttons, Content } from './styles';
import Button from '../../components/Button';
import CardContact from '../../components/CardContact';
import Pagination from '../../components/Pagination';
import api from '../../services/api';
import { Contact } from '../../@types';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [pages, setPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    api.get(`contacts?page=${page}`).then((response) => {
      setContacts(response.data.contacts);
      setPages(response.data.pages);
    });
  }, [page]);

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
        <Pagination pages={pages} activePage={page} onChange={setPage} />
      </Content>
    </Container>
  );
};

export default Homepage;
