import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Title } from '../title';

export const TestimonialTitle = styled(Title)`
    margin-top: 10px;
`;

export const Container = styled.div`
    width: 1120px;
    min-height: auto;
    padding-top: 120px;
`;

export const ReviewContent = styled.div`
    font-family: 'Roboto';
    width: 1002px;
    height: 254px;
    padding: 32px;
    background-color: ${Colors.white};
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 88px;
`;

export const ReviewerSection = styled.div`
    position: relative;
`;

export const Pager = styled.div`
    width: 232px;
    height: 56px;
    position: absolute;
    background-color: ${Colors.navyBlue};
    margin-left: 880px;
    margin-top: 255px;
    display: flex;
`;

export const PagerIndex = styled.div`
    border-right: 1px solid ${Colors.white};
    height: 100%;
    width: 50%;
    color: ${Colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: 600;
    font-stretch: normal;
    font-style: italic;
    line-height: 1;
    letter-spacing: 0.69px;
    font-family: 'CormorantGaramond';
`;

export const PagerButton = styled.button`
    width: 25%;
    height: auto;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${Colors.white};
    cursor: pointer;
    font-size: 25px;
`;

export const ReviewerName = styled.div`
    font-size: 32px;
    font-weight: bolder;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
`;

export const ReviewerPosition = styled.div`
    
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${Colors.greyish};
`;

export const ReviewText = styled.div`
    width: 565px;
    font-size: 24px;
    font-weight: bolder;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color:${Colors.black};
    padding-top: 11px;
`;