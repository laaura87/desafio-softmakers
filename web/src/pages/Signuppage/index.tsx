import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Content, LabelForm } from './styles';
import { Contact } from '../../@types';

const Signuppage: React.FC = () => {
  const { register, handleSubmit } = useForm<Contact>();
  const onSubmit = (data: Contact) => console.log(data);

  return (
    <Container>
      <h1>Cadastrar</h1>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LabelForm>
            <div>
              <label>Nome:</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label>Sobrenome:</label>
              <input type="text" name="surname" />
            </div>
          </LabelForm>

          <LabelForm>
            <div>
              <label>Telefone:</label>
              <input type="text" name="phone" />
            </div>
            <div>
              <label>E-mail:</label>
              <input type="email" name="email" />
            </div>
          </LabelForm>

          <LabelForm>
            <div>
              <label>CEP:</label>
              <input
                type="text"
                name="phone"
                ref={register({
                  required: false,
                  pattern: /[^\d\s-/]/g,
                  maxLength: 8,
                })}
              />
            </div>
            <div>
              <label>Rua:</label>
              <input type="email" name="email" />
            </div>
          </LabelForm>
        </form>
      </Content>
    </Container>
  );
};

export default Signuppage;
