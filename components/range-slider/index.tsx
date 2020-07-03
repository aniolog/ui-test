import React from 'react';
import { RangeInput } from './range-slider.styled';
import { Colors } from '../../styles/colors';
import { DefaultProps, PropTypes } from './range-slider.prop-types';

interface RangeSliderProps {
    step: number,
    max: number, 
    min: number,
    value: number,
    onChange: (value: number) => void 
};

const RangeSlider = (props: RangeSliderProps) => {
    const { value, step, max, min } = props;
    const progress = (value / max) * 100 + '%'
    const styleInput = {
        background: `linear-gradient(90deg, ${Colors.navyBlue} 0% ${progress},   ${Colors.blueBorder} ${progress} 100%)`,
    };
    return (
        <RangeInput 
            type="range"
            min={min}
            max={max}
            value={value}
            style={styleInput}
            step={step}
            onChange={(evt) => props.onChange(evt.target.value)}
        />
    )
}


RangeSlider.propTypes = PropTypes;
RangeSlider.defaultProps = DefaultProps;

export default RangeSlider;