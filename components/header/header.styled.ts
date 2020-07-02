import styled from 'styled-components';
import { Colors } from '../../styles/colors'


export const HeaderContainer = styled.div`
    width: 100vw;
    height: 64px;
    background-color: ${Colors.white};
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const HeaderContent = styled.div`
    width: 1120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
`;

export const Link = styled.a<{ active: Boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 14px;
    color: ${Colors.navyBlue};
    margin-right: 40px;
    height: 64px;
    border-top: ${props => props.active ? `6px solid ${Colors.navyBlue}` : 'none'};
    padding-top: ${props => props.active ? `0` : '6px'};
    cursor: pointer;  
`;