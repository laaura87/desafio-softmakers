import React from 'react';

import { Container } from './styles';

type Text = {
  title: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: React.FC<Text> = ({ title, className, type }: Text) => {
  return (
    <Container>
      <button className={className} type={type}>
        {title}
      </button>
    </Container>
  );
};

export default Button;
