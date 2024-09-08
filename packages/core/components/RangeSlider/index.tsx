import React from 'react'
import { RangeProps } from 'UI/RangeSlider/types'
import { Input } from './styled'

interface UIRangeState {
    value: number
}

const getPercentValue = (value, min, max): string => {
    let percent = '0'
    if (min < max && value > min) {
        percent = (((value - min) / (max - min)) * 100).toFixed(2)
    }
    return percent
}

const UIRange = React.forwardRef<HTMLInputElement, RangeProps>(
    (
        { value, onChange, min, max, placeholder, defaultValue, ...props },
        ref: React.RefObject<HTMLInputElement>,
    ) => {
        let v: number = parseFloat(`${value || defaultValue || 0}`)
        if (isNaN(v) && typeof placeholder !== 'undefined') {
            v = parseFloat(placeholder || '0')
        }

        return (
            <Input
                ref={ref}
                type="range"
                min={min}
                max={max}
                value={v}
                valuePercent={getPercentValue(v, min, max)}
                onChange={(e) => onChange(parseFloat(e.target.value))}
                {...props}
            />
        )
    },
)

export default UIRange
