import styled, { css } from 'styled-components'

const sliderThumbSize = 20
const sliderThumbBorderThickness = 2
const sliderLineThickness = 4
const transitionDuration = '0.3s'
export const overallHeight = 40

const getBackgroundGradient = (lower, upper, percent) => css`
    background: linear-gradient(${lower}, ${lower}) 0 / ${percent}% 100%
        no-repeat ${upper};
`

const sliderThumbStyle = css`
    background: #fff;
    border-radius: 50%;
    border: ${sliderThumbBorderThickness}px solid ${(p) => p.theme.N100};
    height: ${sliderThumbSize}px;
    width: ${sliderThumbSize}px;
`

const sliderThumbHoverStyle = css`
    border-color: ${(p) => p.theme.P100};
`

const sliderThumbDisabledStyle = css`
    cursor: not-allowed;
    background: ${(p) => p.theme.N20};
    border-color: ${(p) => p.theme.N100};
`

const sliderDefaultBackground = (props) =>
    getBackgroundGradient(props.theme.P100, props.theme.N50, props.valuePercent)

const sliderTrackStyle = css`
    background: ${(p) => p.theme.N50};
    border-radius: ${sliderLineThickness / 2}px;
    cursor: pointer;
    height: ${sliderLineThickness}px;
    ${sliderDefaultBackground};
`

const sliderTrackDisableBackgroundStyle = (props) =>
    getBackgroundGradient(props.theme.N100, props.theme.N50, props.valuePercent)

const sliderTrackDisabledStyle = css`
    ${sliderTrackDisableBackgroundStyle};
    cursor: not-allowed;
`

const sliderTrackFocusedStyle = (props) =>
    getBackgroundGradient(props.theme.P100, props.theme.N50, props.valuePercent)

const chromeRangeInputStyle = css`
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        margin-top: -${sliderThumbSize / 2 - sliderLineThickness / 2}px;
        transition: border-color ${transitionDuration} ease-in-out;
        ${sliderThumbStyle};
    }

    &:hover::-webkit-slider-thumb {
        ${sliderThumbHoverStyle};
    }

    &:disabled::-webkit-slider-thumb {
        ${sliderThumbDisabledStyle};
    }

    &::-webkit-slider-runnable-track {
        ${sliderTrackStyle};
    }

    &:focus::-webkit-slider-runnable-track {
        ${sliderDefaultBackground};
    }

    &:active::-webkit-slider-runnable-track,
    &:hover::-webkit-slider-runnable-track {
        ${sliderTrackFocusedStyle};
    }

    &:disabled::-webkit-slider-runnable-track {
        ${sliderTrackDisabledStyle};
    }
`

const firefoxRangeInputStyle = css`
    &::-moz-focus-outer {
        border: 0;
    }

    &::-moz-range-thumb {
        transition: border-color ${transitionDuration} ease-in-out;
        ${sliderThumbStyle};
    }

    &:disabled::-moz-range-thumb {
        ${sliderThumbDisabledStyle};
    }

    &::-moz-range-track {
        ${sliderTrackStyle};
    }

    &:focus::-moz-range-track {
        ${sliderDefaultBackground};
    }

    &:active::-moz-range-track,
    &:hover::-moz-range-track {
        ${sliderTrackFocusedStyle};
    }

    &:disabled::-moz-range-track {
        ${sliderTrackDisabledStyle};
    }
`

const IERangeInputStyle = css`
    &::-ms-thumb {
        margin-top: 0;
        transition: border-color ${transitionDuration} ease-in-out;
        ${sliderThumbStyle};
    }

    &:disabled::-ms-thumb {
        ${sliderThumbDisabledStyle};
    }

    &::-ms-track {
        background: transparent;
        border-color: transparent;
        color: transparent;
        cursor: pointer;
        height: ${sliderLineThickness}px;
        transition: background ${transitionDuration} ease-in-out;
        width: 100%;
    }

    &::-ms-fill-lower {
        background: ${(p) => p.theme.P100};
        border-radius: ${sliderLineThickness / 2}px;
        border: 0;
    }

    &::-ms-fill-upper {
        background: ${(p) => p.theme.P100};
        border-radius: ${sliderLineThickness / 2}px;
        border: 0;
    }

    &:active::-ms-fill-lower,
    &:hover::-ms-fill-lower {
        background: ${(p) => p.theme.N100};
    }

    &:active::-ms-fill-upper,
    &:hover::-ms-fill-upper {
        background: ${(p) => p.theme.P100};
    }

    &:disabled::-ms-fill-lower {
        background: ${(p) => p.theme.N50};
    }

    &:disabled::-ms-fill-upper {
        background: ${(p) => p.theme.N100};
    }
`

export const rangeInputStyle = css`
    height: ${overallHeight}px;
    padding: 0;
    width: 100%;

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${chromeRangeInputStyle} ${firefoxRangeInputStyle} ${IERangeInputStyle};
`

export const Input = styled.input<any>`
    ${rangeInputStyle};
`
