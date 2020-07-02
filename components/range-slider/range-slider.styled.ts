import styled from 'styled-components';

export const RangeInput = styled.input`
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    outline: none;
    margin-top: 20px;

    &::-webkit-slider-thumb {
        appearance: none;
        -webkit-appearance: none;
        background: blue;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: #fff;
        border: 5px solid #071eb3;
        box-shadow: 0 2px 8px 0 rgba(7, 30, 179, 0.24);
    }    
`;