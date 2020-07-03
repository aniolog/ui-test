import React, { useState } from 'react';
import { 
    CalculatorContent,
    InfoContainer,
    CalculatorContainer,
    Container,
    CalculatorInfo,
    CalculatorTitle,
    ExpensesInputGroupContainer,
    ExpensesInputGroup,
    ExpensesInputTitle,
    ExpensesPrefixInput,
    DollarIcon,
    EmployeesInput,
    ExpensesInput,
    ResultSection,
    ResultValue,
    Result,
    ValueDollarIcon,
    ResultAmount,
    CalculatorText,
} from './calculator.styled';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import RangeSlider from '../range-slider';
import { useSelector, useDispatch } from 'react-redux';
import { APP_ACTIONS } from '../../store/actions';
import { PropTypes, DefaultProps } from './calculator.prop-types';

interface CalculatorPageProps {
    calculatorTitle: string,
    calculatorDescription: string,   
};

const CalculatorComponent = (props: CalculatorPageProps) => {
    const { fullTimeEmployees, monthlyIngredientSpending } = useSelector(state => state.app);
    const dispatcher = useDispatch();
    const estimatedCostFoodSavings = monthlyIngredientSpending*0.3;
    const estimatedAnnualSavings = (fullTimeEmployees * 1337) + estimatedCostFoodSavings;
    return (
        <>
            <Container>
                <CalculatorContent>
                    <InfoContainer>
                        <CalculatorTitle><CalculatorText>{props.calculatorTitle}</CalculatorText></CalculatorTitle>
                        <CalculatorInfo>
                            {props.calculatorDescription}
                        </CalculatorInfo>
                    </InfoContainer>
                    <CalculatorContainer>
                        <ExpensesInputGroupContainer>
                            <ExpensesInputGroup>
                                <ExpensesInputTitle>Monthly <br />ingredient spending</ExpensesInputTitle>
                                <ExpensesPrefixInput> 
                                    <DollarIcon icon={faDollarSign}/>
                                    <ExpensesInput
                                        decimalSeparator=","
                                        thousandSeparator="."
                                        precision="0"
                                        value={monthlyIngredientSpending}
                                        disabled={true}
                                    />
                                </ExpensesPrefixInput>
                            </ExpensesInputGroup>
                            <RangeSlider 
                                max={100}
                                min={0}
                                step={10}
                                value={monthlyIngredientSpending}
                                onChange={
                                    (monthlyIngredientSpending) => 
                                        dispatcher({ type: APP_ACTIONS.MONTHLY_INGREDIENTS_SPENDING_LOADED, monthlyIngredientSpending })
                                }
                            />
                        </ExpensesInputGroupContainer>
                        <ExpensesInputGroupContainer isSecond={true}>
                            <ExpensesInputGroup>
                                <ExpensesInputTitle>
                                    Full-time employees that <br />
                                    process invoices
                                </ExpensesInputTitle>
                                <EmployeesInput
                                        max={10}
                                        decimalSeparator=","
                                        thousandSeparator="."
                                        precision="0"
                                        value={fullTimeEmployees}
                                        disabled={true}
                                />
                                
                            </ExpensesInputGroup>
                            <RangeSlider
                                max={10}
                                min={0}
                                step={1}
                                value={fullTimeEmployees}
                                onChange={
                                    (fullTimeEmployees) => 
                                        dispatcher({ type: APP_ACTIONS.FULL_TIME_EMPLOYEES_LOADED, fullTimeEmployees })
                                }
                            />
                        </ExpensesInputGroupContainer>
                        <ResultSection>
                            <Result>
                                <ResultValue>
                                    <ValueDollarIcon icon={faDollarSign}/>
                                    <ResultAmount>{estimatedCostFoodSavings.toLocaleString('es-CO')}</ResultAmount>
                                </ResultValue>
                                <ExpensesInputTitle>Estimated cost food savings</ExpensesInputTitle>
                            </Result>
                            <Result>
                                <ResultValue>
                                    <ValueDollarIcon icon={faDollarSign}/>
                                    <ResultAmount>
                                        {estimatedAnnualSavings.toLocaleString('es-CO')}
                                    </ResultAmount>
                                </ResultValue>
                                <ExpensesInputTitle>Your estimated annual savings</ExpensesInputTitle>
                            </Result>
                        </ResultSection>
                    </CalculatorContainer>
                </CalculatorContent>
            </Container>
        </>
    );
}


CalculatorComponent.propTypes = PropTypes;
CalculatorComponent.defaultProps = DefaultProps;

export default CalculatorComponent;