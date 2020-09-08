import React from 'react';

import { Container } from './styles';

type Text = {
  title: string;
};

const Button: React.FC<Text> = ({ title }: Text) => {
  return (
    <Container>
      <button>{title}</button>
    </Container>
  );
};

export default Button;
