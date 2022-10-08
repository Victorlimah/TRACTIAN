import styled from 'styled-components';

import companyIcon from '../../assets/company-icon.png';

export default function Card({color, title}) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(${companyIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 150px;
    background-color: ${color};
    opacity: 0.9;
    width: 330px;
    height: 130px;
    border-radius: 18px;
    cursor: pointer;
  `;

  const Title = styled.h1`
    color: #fff;
    font-weight: bold;
    font-size: 25px;
    margin: 0;
    padding: 10px;
  `;

    return (
      <Container>
        <Title>{title}</Title>
      </Container>
    );

}