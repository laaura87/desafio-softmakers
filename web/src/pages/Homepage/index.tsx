import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';

import { Container, GridContainer, Buttons, Content } from './styles';
import Button from '../../components/Button';
import CardContact from '../../components/CardContact';
import Pagination from '../../components/Pagination';
import { Contact } from '../../@types';

const Homepage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { data } = useAxios<Contact[]>(`contacts?page=${page}`);

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
          {data?.contacts?.map((item: Contact) => (
            <CardContact key={item.id} {...item} />
          ))}
        </GridContainer>
        <Pagination pages={data?.pages} activePage={page} onChange={setPage} />
      </Content>
    </Container>
  );
};

export default Homepage;
