import React, { useEffect, useState } from 'react';
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
import { Link, useHistory, useParams } from 'react-router-dom';

const Editpage: React.FC = () => {
  const history = useHistory();
  const { id } = useParams();
  const [image, setImage] = useState();

  const { register, handleSubmit, watch, setValue } = useForm<Contact>({});

  async function onSubmit(data: Contact) {
    try {
      const formData = new FormData();
      if (data.image[0]) {
        formData.append('image', data.image[0]);
      }
      formData.append('cep', data.cep);
      formData.append('city', data.city);
      formData.append('email', data.email);
      formData.append('name', data.name);
      formData.append('surname', data.surname);
      formData.append('neighborhood', data.neighborhood);
      formData.append('street', data.street);
      formData.append('state', data.state);
      formData.append('number', data.number);
      formData.append('phone', data.phone);

      await api.put(`/contacts/${id}`, formData);
      window.alert('Contato editado com sucesso!');
      history.push('/');
    } catch (error) {
      window.alert('Erro ao editar o contato.');
    }
  }

  function setValues() {
    api.get(`/contacts/${id}`).then((response) => {
      const phoneFormated = response?.data?.findContact.phone
        .replace(/([()-])/g, '')
        .replace(/^\s*/, '')
        .replace(/\s*$/, '');
      setImage(response?.data?.findContact?.image);
      setValue('name', response?.data?.findContact.name);
      setValue('surname', response?.data?.findContact.surname);
      setValue('phone', phoneFormated);
      setValue('email', response?.data?.findContact.email);
      setValue('cep', response?.data?.findContact.cep);
      setValue('cep', response?.data?.findContact.cep);
      setValue('state', response?.data?.findContact.state);
      setValue('city', response?.data?.findContact.city);
      setValue('street', response?.data?.findContact.street);
      setValue('neighborhood', response?.data?.findContact.neighborhood);
      setValue('number', response?.data?.findContact.number);
    });
  }

  function adressByCep() {
    const cepValueFormat = watch('cep')?.replace('-', '');
    try {
      cep(cepValueFormat as string).then((data) => {
        setValue('state', data.state);
        setValue('city', data.city);
        setValue('street', data.street);
        setValue('neighborhood', data.neighborhood);
      });
    } catch (error) {}
  }

  useEffect(setValues, []);
  useEffect(adressByCep, [watch('cep')]);
  console.log(image);
  return (
    <Container>
      <h1>Editar Contato</h1>
      <Content>
        <ImgContainer>
          <img src={`http://localhost:3050/uploads/${image}`} alt="" />
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
            <Button title="Editar" className="button-width" type="submit" />
          </ButtonsContainer>
        </form>
      </Content>
    </Container>
  );
};

export default Editpage;
