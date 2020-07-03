import propTypes from 'prop-types';

export const PropTypes = {
    step: propTypes.number,
    max: propTypes.number, 
    min: propTypes.number,
    value: propTypes.number,
    onChange: propTypes.func 
}

export const DefaultProps = {
    step: 0,
    max: 0, 
    min: 0,
    value: 0,
}