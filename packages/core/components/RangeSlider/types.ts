export type RangeProps = {
    [key: string]: any
    /** Set the Range disabled */
    disabled?: boolean
    /** Set max value */
    max?: number
    /** Set min value */
    min?: number
    /** Set step value */
    step?: number
    /** Set value */
    value?: number
    /** Default value */
    defaultValue?: number
    /** Set value percent */
    valuePercent?: string
    /** Event onChange */
    onChange?: (value: number) => void
    /** Ref */
    inputRef?: any
    /** innerRef */
    innerRef?: any
    placeholder?: string
}
