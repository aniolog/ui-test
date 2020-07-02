import React, { useEffect }  from 'react';
import { getCalculatorInfo } from '../services';
import { useSelector, useDispatch } from 'react-redux';
import { APP_ACTIONS } from '../store/actions';

interface CalculatorPageProps {
  title: string,
  description: string
};

const CalculatorPage = (props: CalculatorPageProps) => {
  const dispatcher = useDispatch();
  
  useEffect(() => {
    dispatcher({ type: APP_ACTIONS.CALCULATOR_INFO_LOADED, calculatorTitle: props.title, calculatorDescription: props.description });
  }, []);

  return (
    <>
      {props.title}
      <br />
      {props.description}
    </>
  );
}

CalculatorPage.getInitialProps = async () => {
  const { calculator: { title, description } } = await getCalculatorInfo();
  return { title, description };
};

export default CalculatorPage;