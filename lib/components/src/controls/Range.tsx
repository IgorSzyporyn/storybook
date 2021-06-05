import React, { useEffect, useState, useRef } from 'react';
import { styled } from '@storybook/theming';
import { lighten, darken, rgba } from 'polished';
import { useMeasure } from '../hooks/useMeasure';
import { parse } from './Number';
import { countDecimalDigits, countWholeDigits, getControlId } from './helpers';

// eslint-disable-next-line import/order
import type { ChangeEvent } from 'react';
import type { ControlProps, NumberValue, RangeConfig } from './types';

type RangeControlProps = ControlProps<NumberValue | null> & RangeConfig;

export const RangeControl = ({
  name,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  onBlur,
  onFocus,
}: RangeControlProps) => {
  const [currentLabelMinWidth, setCurrentLabelMinWidth] = useState(0);
  const widthCheckerRef = useRef(null);
  const widthChecker = useMeasure(widthCheckerRef);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(parse(event.target.value));
  };

  const hasValue = value !== undefined;
  const stepDigits = countDecimalDigits(step);
  const maxDigits = countWholeDigits(max);
  const checkerString = `${maxDigits > 0 ? '0'.repeat(maxDigits) : ''}${
    stepDigits > 0 ? `.${'0'.repeat(stepDigits)}` : ''
  }`;

  useEffect(() => {
    setCurrentLabelMinWidth(widthChecker.width);
  }, [widthChecker, setCurrentLabelMinWidth]);

  return (
    <>
      <CurrentLabelMaxWidthChecker ref={widthCheckerRef}>
        {checkerString}
      </CurrentLabelMaxWidthChecker>
      <RangeWrapper>
        <RangeLabel>{min}</RangeLabel>
        <RangeInput
          id={getControlId(name)}
          type="range"
          onChange={handleChange}
          {...{ name, value, min, max, step, onFocus, onBlur }}
        />
        <RangeLabel>
          <CurrentLabel minWidth={currentLabelMinWidth}>
            {hasValue ? value.toFixed(stepDigits) : '--'}
          </CurrentLabel>
          <LabelSeparator>/</LabelSeparator>
          <MaxLabel>{max}</MaxLabel>
        </RangeLabel>
      </RangeWrapper>
    </>
  );
};

const CurrentLabelMaxWidthChecker = styled.div({
  position: 'absolute',
  visibility: 'hidden',
  top: 0,
  left: 0,
  opacity: 0,
  padding: 0,
  margin: 0,
  fontSize: 12,
  zIndex: -1,
});

const RangeWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

const RangeInput = styled.input(({ theme }) => ({
  // Resytled using http://danielstern.ca/range.css/#/
  '&': {
    width: '100%',
    backgroundColor: 'transparent',
    appearance: 'none',
  },

  '&::-webkit-slider-runnable-track': {
    background:
      theme.base === 'light'
        ? darken(0.02, theme.input.background)
        : lighten(0.02, theme.input.background),
    border: `1px solid ${theme.appBorderColor}`,
    borderRadius: 6,
    width: '100%',
    height: 6,
    cursor: 'pointer',
  },

  '&::-webkit-slider-thumb': {
    marginTop: '-6px',
    width: 16,
    height: 16,

    border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`,
    borderRadius: '50px',
    boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`,
    cursor: 'grab',
    appearance: 'none',
    background: `${theme.input.background}`,
    transition: 'all 150ms ease-out',

    '&:hover': {
      background: `${darken(0.05, theme.input.background)}`,
      transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
      transition: 'all 50ms ease-out',
    },

    '&:active': {
      background: `${theme.input.background}`,
      transform: 'scale3d(1, 1, 1) translateY(0px)',
      cursor: 'grabbing',
    },
  },

  '&:focus': {
    outline: 'none',

    '&::-webkit-slider-runnable-track': {
      borderColor: rgba(theme.color.secondary, 0.4),
      background: theme.background.hoverable,
    },

    '&::-webkit-slider-thumb': {
      borderColor: theme.color.secondary,
      boxShadow: `0 0px 5px 0px ${theme.color.secondary}`,
    },
  },

  '&::-moz-range-track': {
    background:
      theme.base === 'light'
        ? darken(0.02, theme.input.background)
        : lighten(0.02, theme.input.background),
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: 6,
    width: '100%',
    height: 6,
    cursor: 'pointer',
    outline: 'none',
  },

  '&::-moz-range-thumb': {
    width: 16,
    height: 16,
    border: `1px solid ${rgba(theme.color.border, 0.2)}`,
    borderRadius: '50px',
    boxShadow: `0 1px 3px 0px ${rgba(theme.color.border, 0.2)}`,
    cursor: 'grab',
    background: `${theme.input.background}`,
    transition: 'all 150ms ease-out',

    '&:hover': {
      background: `${darken(0.05, theme.input.background)}`,
      transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
      transition: 'all 50ms ease-out',
    },

    '&:active': {
      background: `${theme.input.background}`,
      transform: 'scale3d(1, 1, 1) translateY(0px)',
      cursor: 'grabbing',
    },
  },
  '&::-ms-track': {
    background:
      theme.base === 'light'
        ? darken(0.02, theme.input.background)
        : lighten(0.02, theme.input.background),
    borderColor: 'transparent',
    borderWidth: '7.3px 0',
    color: 'transparent',
    width: '100%',
    height: '6px',
    cursor: 'pointer',
  },
  '&::-ms-fill-lower': {
    background: '#dadada',
    border: `1px solid ${theme.appBorderColor}`,
    borderRadius: 6,
  },
  '&::-ms-fill-upper': {
    background: '#dddddd',
    border: `1px solid ${theme.appBorderColor}`,
    borderRadius: 6,
  },
  '&::-ms-thumb': {
    width: 16,
    height: 16,
    background: `${theme.input.background}`,
    border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`,
    borderRadius: 50,
    cursor: 'grab',
    marginTop: 0,
  },
  '&:focus::-ms-fill-lower': { background: '#dddddd' },
  '&:focus::-ms-fill-upper': { background: '#e0e0e0' },
  '@supports (-ms-ime-align:auto)': { 'input[type=range]': { margin: '0' } },
}));

const RangeLabel = styled.span({
  paddingLeft: 5,
  paddingRight: 5,
  fontSize: 12,
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
});

interface CurrentLabelProps {
  minWidth: number;
}

const CurrentLabel = styled.div<CurrentLabelProps>(({ minWidth }) => ({
  minWidth,
  textAlign: 'right',
}));

const LabelSeparator = styled.div({
  margin: '0 2px',
});

const MaxLabel = styled.div({});
