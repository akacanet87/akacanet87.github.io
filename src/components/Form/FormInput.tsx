import CloseRounded from '@mui/icons-material/CloseRounded'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import cx from 'classnames'
import isNil from 'lodash/isNil'
import {
  HTMLInputTypeAttribute,
  // ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'

type InputModeProps =
  'email'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | 'none'
  | 'numeric'
  | 'decimal'
  | 'number'
  | 'currency'

interface InputProps {
  type?: HTMLInputTypeAttribute | 'search' | 'currency'
  inputMode?: InputModeProps
  id?: string
  className?: string
  value?: string | number
  // patternType?: undefined | 'number' | 'string' | 'email' | 'currency'
  // errorMessage?: string
  placeholder?: string
  maxLength?: number
  onChange?: (value: string) => void
  isClearable?: boolean
  readonly?: boolean
  onClick?: () => void
  disabled?: boolean
  // invalid?: boolean
  // leftIcon?: ReactNode
  // rightIcon?: ReactNode
}

function Input({
  id,
  type = 'text',
  inputMode = 'text',
  className,
  value = '',
  placeholder,
  maxLength = 0,
  onChange = () => {},
  isClearable = true,
  readonly = false,
  onClick = () => {},
  disabled = false,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState(value)

  const onChangeValue = (changedValue: number | string) => {
    let targetValue = changedValue.toString()
    if (maxLength !== 0 && targetValue.length > maxLength) return
    if (type === 'number' || type === 'currency') {
      targetValue = targetValue.replace(/[^0-9]/g, '')
      targetValue = targetValue.replace(/-/g, '')
    }
    if (type === 'currency') {
      if (targetValue.indexOf('0') === 0) {
        targetValue = targetValue.substring(1)
      }
      targetValue = targetValue.replace(/\d(?=(?:\d{3})+$)/g, '$&,')
    }
    setInputValue(targetValue)
    onChange(targetValue)
  }
  const onClear = () => {
    setInputValue('')
    inputRef?.current?.focus()
    onChange('')
  }
  useEffect(
    function onChangeInputValue() {
      if (!isNil(value)) {
        onChangeValue(value)
      }
    },
    [value],
  )
  return (
    <InputWrapper
      className={cx(`input`, { className })}
      onClick={() => {
        if (disabled) return
        onClick()
      }}
    >
      <LeftIcon
        className="left-icon"
        type={type}
      />
      <input
        id={id}
        ref={inputRef}
        type={type === 'currency' ?
          'text' :
          type}
        className={cx({ filled: !isNil(inputValue) && inputValue.toString().length > 0 })}
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => onChangeValue(e.target.value)}
        readOnly={readonly}
        disabled={disabled}
        inputMode={inputMode === 'currency' || inputMode === 'number' ?
          'numeric' :
          inputMode}
      />
      {isClearable && (<RightIcon
        className="right-icon"
        onClick={onClear}
      />)}
    </InputWrapper>
  )
}

const LeftIcon = ({
  className = '',
  type = 'text',
}) => {
  switch (type) {
    case 'search':
      return <SearchOutlined className={className} />
    default:
      return null
  }
}

const RightIcon = ({
  className = '',
  onClick = () => {
  },
}) => <CloseRounded
  className={className}
  onClick={onClick}
/>

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 12px 36px 12px 12px;
    background-color: transparent;
  }

  * + input {
    padding-left: 36px;
  }

  .left-icon,
  .right-icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .left-icon {
    left: 12px
  }

  .right-icon {
    right: 12px;
  }
`

export default Input
