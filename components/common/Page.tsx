import * as React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { up } from 'lib/styles/helpers';

export interface PageProps {}

const RootContainer = styled.div`
  padding: 1rem 0;
  ${up('md')} {
    padding: 2rem 0;
  }
`;

export const Page: React.FC<PageProps> = (props) => {
  return (
    <RootContainer>
      <Container>{props.children}</Container>
    </RootContainer>
  );
};
