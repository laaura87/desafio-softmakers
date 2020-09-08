import styled from 'styled-components';

export const Container = styled.div`
  > button {
    outline: none;
    cursor: pointer;
    background-color: #444251;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
  }
  button:hover {
    background-color: #5f5c70;
    transition: 0.4s;
  }
`;
