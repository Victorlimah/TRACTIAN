import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
`;

export const Box = styled.div`
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #333;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 80%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 80%;
  height: 40px;
  border: 0;
  border-radius: 5px;
  background: #333;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

