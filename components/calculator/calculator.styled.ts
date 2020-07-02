import styled from 'styled-components';
import { Title } from '../title';
import { Colors } from '../../styles/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CurrencyFormat from 'react-currency-format';

export const Container = styled.div`
    width: 1120px;
    min-height: fit-content;
    padding-top: 120px;
    color: ${Colors.black};
`;

export const CalculatorContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 120px;
`;

export const CalculatorTitle = styled(Title)``;

export const InfoContainer = styled.div`
    width: 350px;
`;

export const CalculatorContainer = styled.div`
    width: 535px;
    display: flex;
    flex-direction: column;
    
`;

export const CalculatorInfo = styled.div`
    color: ${Colors.black};
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    margin-top: 35px;
`;

export const ExpensesInputGroupContainer = styled.div<{ isSecond: Boolean }>`
    display: flex;
    flex-direction: column;
    margin-top: ${props => props.isSecond ? '40px' : '0'};
`;

export const ExpensesInputGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

export const ExpensesInputTitle = styled.small`
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
`;

export const ExpensesPrefixInput = styled.div`
    width: 190px;
    height: 46px;
    border: solid 1px ${Colors.blueBorder};
    border-radius: 4px;
    background-color: ${Colors.white};
    display: flex;
    justify-content: space-around;
    padding: 6px 12px;
    align-items: center;
`;

export const DollarIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
    color: ${Colors.greyish};
`;

export const ExpensesInput = styled(CurrencyFormat)`
    height: 100%;
    width: 100%;
    margin-left: 10px;
    border: none;
    outline: none;
    text-align: end;
    font-size: 36px;
    background: transparent;
    &:disabled{
        background: transparent;
        color: ${Colors.black};
    }
`;

export const EmployeesInput = styled(CurrencyFormat)`
    width: 67px;
    height: 46px;
    border: solid 1px ${Colors.blueBorder};
    border-radius: 4px;
    background-color: ${Colors.white};
    text-align: end;
    font-size: 36px;
    padding: 6px 12px;
    &:disabled{
        background-color: ${Colors.white};
        color: ${Colors.black};
    }
`;