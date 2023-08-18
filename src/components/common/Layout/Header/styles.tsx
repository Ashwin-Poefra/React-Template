import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  width: 100%;

  position: fixed;
  top: 0px;

  background-color: rgb(67 56 202);
`;

export const WebsiteTitle = styled(Link)`
  font-size: 30px;
  line-height: 36px;

  font-weight: bold;
  color: white;

  text-decoration: none;
`;
