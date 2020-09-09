import styled from 'styled-components';

export const Container = styled.div`
  .user-not-found {
    display: flex;
    flex-direction: column;
  }

  width: 90%;
  max-width: 1100px;
  padding: 2em;
  background-color: #e4e3e5;
  margin: 10vh auto;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const LeftSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    margin-top: 10px;
    align-items: center;
    svg {
      margin-left: 50px;
    }
    span {
      margin-left: 5px;
    }
  }

  div {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    margin: 8vh auto;
  }
  div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Information = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  div h4 {
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;

  .delete {
    margin-right: 20px;
    background-color: #c21807;
  }

  .delete:hover {
    background-color: #b22222;
    transition: 0.4s;
  }
`;
