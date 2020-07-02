import React, { useEffect }  from 'react';
import { getCalculatorInfo } from '../services';
import { useSelector, useDispatch } from 'react-redux';
import { APP_ACTIONS } from '../store/actions';
import CalculatorComponent from '../components/calculator';

interface CalculatorPageProps {
  calculatorTitle: string,
  calculatorDescription: string,   
};

const CalculatorPage = (props: CalculatorPageProps) => {
  const dispatcher = useDispatch();
  
  useEffect(() => {
    dispatcher({ 
      type: APP_ACTIONS.CALCULATOR_INFO_LOADED,
      calculatorTitle: props.calculatorTitle,
      calculatorDescription: props.calculatorDescription 
    });
  }, []);

  return (
    <>
      <CalculatorComponent calculatorTitle={props.calculatorTitle}  calculatorDescription={props.calculatorDescription}/>
    </>
  );
}

CalculatorPage.getInitialProps = async () => {
  const { calculator: { title, description } } = await getCalculatorInfo();
  return { calculatorTitle: title, calculatorDescription: description };
};

export default CalculatorPage;