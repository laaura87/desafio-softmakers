import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import cep from 'cep-promise';
import NumberFormat from 'react-number-format';

import {
  Container,
  Content,
  LabelForm,
  InputFile,
  ButtonsContainer,
  ImgContainer,
} from './styles';

import Button from '../../components/Button';
import { FaArrowLeft } from 'react-icons/fa';

import { Contact } from '../../@types';
import { Link, useHistory } from 'react-router-dom';

const Signuppage: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit, watch, setValue } = useForm<Contact>({});

  async function onSubmit(data: Contact) {
    try {
      const formData = new FormData();
      formData.append('image', data.image[0]);
      formData.append('cep', data.cep);
      formData.append('city', data.city);
      formData.append('email', data.email);
      formData.append('name', data.name);
      formData.append('surname', data.surname);
      formData.append('neighborhood', data.neighborhood);
      formData.append('street', data.street);
      formData.append('state', data.state);
      formData.append('number', data.number);
      formData.append('phone', data.name);

      await api.post('/contacts/', formData);
      window.alert('Contato criado com sucesso!');
      history.push('/');
    } catch (error) {
      window.alert('Erro ao cadastrar o contato.');
    }
  }

  function adressByCep() {
    const cepValueFormat = watch('cep')?.replace('-', '');
    console.log(cepValueFormat?.length);
    try {
      cep(cepValueFormat as string).then((data) => {
        setValue('state', data.state);
        setValue('city', data.city);
        setValue('street', data.street);
        setValue('neighborhood', data.neighborhood);
      });
    } catch (error) {}
  }

  useEffect(adressByCep, [watch('cep')]);

  return (
    <Container>
      <h1>Cadastrar</h1>

      <Content>
        <ImgContainer>
          <img
            src={`https://api.adorable.io/avatars/200/${Math.random() * 10}`}
            alt=""
          />
        </ImgContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputFile>
            <input type="file" ref={register} name="image" />
          </InputFile>
          <LabelForm>
            <div>
              <label>Nome:</label>
              <input type="text" name="name" ref={register} />
            </div>
            <div>
              <label>Sobrenome:</label>
              <input type="text" name="surname" ref={register} />
            </div>
          </LabelForm>

          <LabelForm>
            <div>
              <label>Telefone:</label>
              <NumberFormat
                name="phone"
                format="(##) #####-####"
                getInputRef={register}
              />
            </div>
            <div>
              <label>E-mail:</label>
              <input type="email" name="email" ref={register} />
            </div>
          </LabelForm>

          <LabelForm>
            <div>
              <label>CEP:</label>
              <input type="text" ref={register} name="cep" maxLength={9} />
            </div>
            <div>
              <label>Estado:</label>
              <input type="text" name="state" ref={register} />
            </div>
          </LabelForm>

          <LabelForm>
            <div>
              <label>Cidade:</label>
              <input type="text" name="city" ref={register} />
            </div>
            <div>
              <label>Rua:</label>
              <input type="text" name="street" ref={register} />
            </div>
          </LabelForm>

          <LabelForm>
            <div>
              <label>Bairro:</label>
              <input type="text" name="neighborhood" ref={register} />
            </div>
            <div>
              <label>Número:</label>
              <NumberFormat
                name="number"
                format="#####"
                getInputRef={register}
              />
            </div>
          </LabelForm>

          <ButtonsContainer>
            <Link to="/">
              <FaArrowLeft />
              <span>Voltar para o início</span>
            </Link>
            <Button title="Cadastrar" className="button-width" type="submit" />
          </ButtonsContainer>
        </form>
      </Content>
    </Container>
  );
};

export default Signuppage;
