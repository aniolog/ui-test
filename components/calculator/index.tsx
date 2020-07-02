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
    ExpensesInput
} from './calculator.styled';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import RangeSlider from '../range-slider';


interface CalculatorPageProps {
    calculatorTitle: string,
    calculatorDescription: string,   
};


const CalculatorComponent = (props: CalculatorPageProps) => {
    const [ fullTimeEmployees, setFullTimeEmployees ] = useState(0);
    const [ monthlyIngredientSpending, setMonthlyIngredientSpending ] = useState(0);
    return (
        <>
            <Container>
                <CalculatorContent>
                    <InfoContainer>
                        <CalculatorTitle>Save more with</CalculatorTitle>
                        <CalculatorTitle>Bellotero.io</CalculatorTitle>
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
                                onChange={(value) => setMonthlyIngredientSpending(value)}
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
                                        onChange={(evt) => setFullTimeEmployees(evt.target.value)}
                                        disabled={true}
                                />
                                
                            </ExpensesInputGroup>
                            <RangeSlider
                                max={10}
                                min={0}
                                step={1}
                                value={fullTimeEmployees}
                                onChange={(value) => setFullTimeEmployees(value)}
                            />
                        </ExpensesInputGroupContainer>
                    </CalculatorContainer>
                </CalculatorContent>
            </Container>
        </>
    );
}

export default CalculatorComponent;