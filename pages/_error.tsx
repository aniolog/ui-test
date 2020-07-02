import React from 'react';
import { Title } from '../components/title';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 10px;
`;

const Error = () => {
  return (
    <>
      <Container>
        <Title>An error has ocurred</Title>
      </Container>
    </>
  )
};

Error.getInitialProps = async ({ err }) => {
  return { 
    statusCode: err && err.statusCode,
  }
}

export default Error;
