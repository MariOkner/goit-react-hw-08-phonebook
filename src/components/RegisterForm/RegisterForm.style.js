import styled from '@emotion/styled';

export const Form = styled.form`
  margin-right: auto;
  margin-left: auto;
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
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
