import React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../store/state';

interface IndexPageProps {

};

const Index = (props: IndexPageProps) => {
  return (
    <>
      Hola
    </>
  );
}

Index.getInitialProps = async () => {
  return {};
};

export default Index;