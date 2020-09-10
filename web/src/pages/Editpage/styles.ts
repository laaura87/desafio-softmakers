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
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  text-align: center;

  > img {
    margin-top: 20px;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
  }
`;

export const LabelForm = styled.div`
  width: 90%;
  margin: 20px auto;
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
    width: 70%;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InputFile = styled.div`
  width: 60%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  padding: 16px;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const ButtonsContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  a {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }

  .button-width {
    width: 100%;
  }
`;
