import * as React from 'react';
import { Container, Title } from './styles/header';

const Header = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Title = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Title {...restProps}>{children}</Title>;
};

export default Header;
