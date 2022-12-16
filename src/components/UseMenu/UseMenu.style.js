import styled from 'styled-components';

export const WrapperHTML = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UsernameHTML = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  font-size: 12px;
  background-color: #585858;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  transform: scale(1);
  transition: all 250ms;
  :hover {
    transform: scale(1.1);
  }
  :hover {
    opacity: 0.8;
  }
`;
