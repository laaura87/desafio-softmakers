import React from 'react';

import { Container } from './styles';

type Text = {
  title: string;
  className?: string;
};

const Button: React.FC<Text> = ({ title, className }: Text) => {
  return (
    <Container>
      <button className={className}>{title}</button>
    </Container>
  );
};

export default Button;
