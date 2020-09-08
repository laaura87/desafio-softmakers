import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.7em;
  margin-top: 20px;
  width: 100%;
  -webkit-box-shadow: 7px 10px 23px -5px rgba(0, 0, 0, 0.3);
  box-shadow: 7px 10px 23px -5px rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: space-between;
  align-items: center;

  .image-container {
    width: 100px;
    height: 100px;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  > div p {
    text-align: left;
    font-size: 18px;
  }
  div:last-child {
    display: flex;
    button {
      margin-left: 10px;
    }
  }

  .delete button {
    background-color: #c21807;
  }
  .delete button:hover {
    background-color: #b22222;
    transition: 0.4s;
  }
`;
