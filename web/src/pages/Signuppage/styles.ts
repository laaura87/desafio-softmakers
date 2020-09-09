import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 1100px;
  height: 70vh;
  margin: 20px auto;
  > h1 {
    text-align: center;
    color: white;
  }
`;
export const Content = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
  background-color: #e4e3e5;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const LabelForm = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  > div label {
    font-size: 18px;
    margin-right: 5px;
  }
  > div input {
    border: 1px solid grey;
    outline: none;
    padding: 5px;
    border-radius: 8px;
  }
`;
