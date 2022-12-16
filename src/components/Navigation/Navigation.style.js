import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { RiContactsBook2Fill } from 'react-icons/ri';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const PhonebookIcon = styled(RiContactsBook2Fill)`
  width: 32px;
  height: 32px;

  margin-right: 10px;
  vertical-align: top;

  color: #0b2349;
`;

export const TitlePhonebook = styled.h1`
  display: inline-block;

  background: linear-gradient(45deg, #0b2349 33%, #0d61bc 66%, #8aa9d6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #0b2349;

  font-size: 30px;
  font-weight: 900;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;

  padding: 12px;
  margin-left: 35px;
  margin-top: 8px;

  font-weight: 700;
  font-size: 18px;
  color: #2a363b;

  :active {
    color: #e84a5f;
  }
`;
